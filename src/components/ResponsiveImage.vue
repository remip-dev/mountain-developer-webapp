<template>
  <img :src="smallImage" :srcset="srcset" :sizes="sizes" :alt="alt" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    const composeSrcsetAndSizes = () => {
      if (props.largeImage && props.mediumImage) {
        return {
          srcset: `${props.smallImage} 480w, ${props.mediumImage} 800w, ${props.largeImage} 1200w`,
          sizes: '(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px'
        }
      }
      if (props.largeImage) {
        return {
          srcset: `${props.smallImage} 480w, ${props.largeImage} 1200w`,
          sizes: '(max-width: 600px) 480px, 1200px'
        }
      }
      if (props.mediumImage) {
        return {
          srcset: `${props.smallImage} 480w, ${props.mediumImage} 800w`,
          sizes: '(max-width: 600px) 480px, 800px'
        }
      }
      return {
        srcset: '',
        sizes: ''
      }
    }

    const { srcset, sizes } = composeSrcsetAndSizes()
    return { srcset, sizes }
  }
})
</script>
