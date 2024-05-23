<template>
  <img style="width: 180px" :src="image" alt="">
  <FaceGenerator ref="faceGeneratorRef" style="width: 50px; height: 50px" @image-change="imageChange" @click="random" />
</template>

<script>
import FaceGenerator from './views/FaceGenerator.vue'

export default {
  components: {FaceGenerator},
  name: 'App',
  data() {
    return {
      image: ''
    }
  },
  methods: {
    random() {
      this.$refs.faceGeneratorRef.generateFace()
    },
    imageChange(image) {
      this.image = image
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
