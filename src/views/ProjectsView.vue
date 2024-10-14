<script setup lang="ts">
import RatingScale from '@/components/projects/RatingScale.vue'
import CompetenceBadge from '@/components/projects/CompetenceBadge.vue'

const mark = 4
</script>

<template>
  <div>
    <h1>Page en construction</h1>
    <RatingScale :mark="4" />
    <CompetenceBadge label="Web-App" />
  </div>
</template>

<style scoped>
img {
  width: 70vw;
  max-width: 500px;
}
</style>
