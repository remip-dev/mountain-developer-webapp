<script setup lang="ts">
import RatingScale from '@/components/projects/RatingScale.vue'
import CompetenceBadge from '@/components/projects/CompetenceBadge.vue'
import ScreenOverview from '@/components/projects/ScreenOverview.vue'
import HikeSign from '@/components/projects/HikeSign.vue'

const mark = 4
const imageTab = [
  'https://www.referenseo.com/wp-content/uploads/2023/09/portfolio-redacteur-web-1024x576.png',
  'https://www.referenseo.com/wp-content/uploads/2023/09/portfolio-redaction-web-1024x576.png',
  'https://www.referenseo.com/wp-content/uploads/2023/09/portfolio-redacteur-web-1024x576.png',
  'https://www.referenseo.com/wp-content/uploads/2023/09/portfolio-redacteur-web-1024x576.png'
]
</script>

<template>
  <div>
    <h1>Page en construction</h1>
    <RatingScale :mark="4" />
    <CompetenceBadge label="Web-App" />
    <ScreenOverview :images="imageTab" class="container" />
    <HikeSign title="Personnal Project" category="Site Vitrine" class="hike-sign" />
  </div>
</template>

<style scoped>
img {
  width: 70vw;
  max-width: 500px;
}

.container {
  width: 500px;
}
</style>
