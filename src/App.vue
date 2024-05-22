<template>
  <img :src="image" alt="">
  <FaceGenerator @image-change="imageChange"/>
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
