<template>
  <div class="page-container">
    <ResponsiveImage
      :smallImage="smallImage"
      :mediumImage="mediumImage"
      :largeImage="largeImage"
      alt="Un montagnard, sac à dos au sol, devant des montagnes. Texte : 'Suivez-moi' pointant vers le bas"
    />
    <h1>Le développeur montagnard</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResponsiveImage from '@/components/ResponsiveImage.vue'
import smallImage from '@/assets/images/follow-me/follow_me_small.webp'
import mediumImage from '@/assets/images/follow-me/follow_me_medium.webp'
import largeImage from '@/assets/images/follow-me/follow_me_large.webp'

export default defineComponent({
  name: 'HomeView',
  components: {
    ResponsiveImage
  },
  setup() {
    return {
      smallImage,
      mediumImage,
      largeImage
    }
  }
})
</script>

<style scoped>
.page-container {
  margin: 0px 110px;
}
</style>
