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
    const srcsetAndSizes = () => {
      if (!props.largeImage) {
        if (!props.mediumImage) {
          // If there isn't any large or medium image
          return {
            srcset: '',
            sizes: ''
          }
        }
        // If there is a medium image but no large image
        return {
          srcset: `${props.smallImage} 480w, ${props.mediumImage} 800w`,
          sizes: '(max-width: 600px) 480px, 800px'
        }
      }
      if (!props.mediumImage) {
        // If there is a large image but no medium image
        return {
          srcset: `${props.smallImage} 480w, ${props.largeImage} 1200w`,
          sizes: '(max-width: 600px) 480px, 1200px'
        }
      }
      // If there are all the images
      return {
        srcset: `${props.smallImage} 480w, ${props.mediumImage} 800w, ${props.largeImage} 1200w`,
        sizes: '(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px'
      }
    }

    const { srcset, sizes } = srcsetAndSizes()
    return { srcset, sizes }
  }
})
</script>
