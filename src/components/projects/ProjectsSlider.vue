<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Navigation, Scrollbar } from 'swiper/modules'
import ProjectOverview from './ProjectOverview.vue'
import projects from '@/assets/projects.json'

const modules = [Navigation, Scrollbar]
</script>

<template>
  <swiper
    :loop="true"
    :scrollbar="{
      hide: true
    }"
    :navigation="true"
    :modules="modules"
  >
    <swiper-slide v-for="(project, index) in projects" :key="index"
      ><ProjectOverview :project="project"
    /></swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev {
  color: red;
}
</style>
