<template lang="html">
  <div class="tag">
    <h1>Take a picture of the tree</h1>
    <p>Leaf and bark photos are not required, but help and will increase your score.</p>
    <div class="photo-button material-icons mdl-badge mdl-badge--overlap" data-badge="✓">
      <label for="tree">
        <img src="../assets/ashtag-logo.png" alt="test" align="middle" width="60%" data-type="tree" style="cursor:pointer;">
      </label>
      <input @change="takePhoto($event)" id="tree" type="file" accept="image/*" name="file" >
    </div>
    <div class="photo-button material-icons mdl-badge mdl-badge--overlap" data-badge="">
      <button class="mdl-button mdl-js-button mdl-button--raised" to="/tag">
        Leaf
      </button>
    </div>
    <div class="photo-button material-icons mdl-badge mdl-badge--overlap" data-badge="">
      <button class="mdl-button mdl-js-button mdl-button--raised" to="/tag">
        Bark
      </button>
    </div>
    <div class="photo-button">
      <button @click="uploadPhotos()" id="upload" class="done-button mdl-button mdl-js-button mdl-button--raised">
        Done
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tag',
  data: function () {
    return {
      compressedPhotos: {}
    }
  },
  methods: {
    takePhoto (e) {
      console.log(e.target.id)
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      console.log(files[0])
      createImageBitmap(files[0])
        .then(response => {
          this.compress(e.target.id, response)
        })
    },
    uploadPhotos () {
      var url = 'https://s3.amazonaws.com/ash-tree-photos'
      console.log(url)
      // var base64ImageContent = result_image_obj.replace(/^data:image\/(png|jpeg);base64,/, "")
      // var blob = base64ToBlob(base64ImageContent, 'image/jpeg')
      // var blobFile = new File([blob], img_name)
      // var formData = new FormData()
      // formData.append('key', blobFile.name)
      // formData.append('file', blobFile)
    },
    compress (photoType, source) {
      console.log(source)
      let cvs = document.createElement('canvas')
      cvs.width = source.width
      cvs.height = source.height
      // let ctx = cvs.getContext('2d').drawImage(source, 0, 0)
      let newImageData = cvs.toDataURL('image/jpeg', 0.5)
      this.compressedPhotos[photoType] = { img: newImageData, loc: '' }
      console.log(this.compressedPhotos)
    },
    base64ToBlob (base64, mime) {
      mime = mime || ''
      let sliceSize = 1024
      let byteChars = window.atob(base64)
      let byteArrays = []

      for (let offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
        let slice = byteChars.slice(offset, offset + sliceSize)

        let byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }

        let byteArray = new Uint8Array(byteNumbers)

        byteArrays.push(byteArray)
      }

      return new Blob(byteArrays, {type: mime})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  font-weight: normal;
}

h1 {
  font-size: 30px;
}

p {
  padding: 0 30px;
}

a {
  color: #35495E;
}

.photo-button {
  text-align: center;
  margin-bottom: 1em;
}

.done-button {
  min-width: 250px;
  min-height: 250px;
  font-size: 3em;
}

#tree
{
    display: none;
}
#leaf
{
    display: none;
}
#bark
{
    display: none;
}

</style>
