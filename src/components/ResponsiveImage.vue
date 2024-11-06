<template>
  <img :src="smallImage" :srcset="computedSrcset" :sizes="computedSizes" :alt="alt" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ResponsiveImage',
  props: {
    smallImage: {
      type: String,
      required: true
    },
    mediumImage: {
      type: String
    },
    largeImage: {
      type: String
    },
    alt: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const computedSrcset = computed(() => {
      if (props.largeImage && props.mediumImage) {
        return `${props.smallImage} 480w, ${props.mediumImage} 800w, ${props.largeImage} 1200w`
      }
      if (props.largeImage) {
        return `${props.smallImage} 480w, ${props.largeImage} 1200w`
      }
      if (props.mediumImage) {
        return `${props.smallImage} 480w, ${props.mediumImage} 800w`
      }
      return ''
    })

    const computedSizes = computed(() => {
      if (props.largeImage && props.mediumImage) {
        return '(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px'
      }
      if (props.largeImage) {
        return '(max-width: 600px) 480px, 1200px'
      }
      if (props.mediumImage) {
        return '(max-width: 600px) 480px, 800px'
      }
      return ''
    })

    return { computedSrcset, computedSizes }
  }
})
</script>
