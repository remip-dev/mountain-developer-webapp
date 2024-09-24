import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ResponsiveImage from '@/components/ResponsiveImage.vue'

const smallImage = 'smallImage.webp'
const mediumImage = 'mediumImage.webp'
const largeImage = 'largeImage.webp'
const alt = "Description de l'image"

describe('ResponsiveImage.vue', () => {
  it('renders an image tag with src, srcset, sizes and alt attributes', () => {
    const wrapper = mount(ResponsiveImage, {
      props: {
        smallImage: smallImage,
        mediumImage: mediumImage,
        largeImage: largeImage,
        alt
      }
    })
    const img = wrapper.find('img')

    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBeDefined()
    expect(img.attributes('srcset')).toBeDefined()
    expect(img.attributes('sizes')).toBeDefined()
    expect(img.attributes('alt')).toBeDefined()
  })
  it('uses the small image in priority', () => {
    const smallImage = 'smallImage.webp'
    const wrapper = mount(ResponsiveImage, {
      props: {
        smallImage: smallImage,
        mediumImage: mediumImage,
        largeImage: largeImage,
        alt
      }
    })
    const img = wrapper.find('img')

    expect(img.attributes('src')).toBe(smallImage)
  })
  it('has a well-defined srcset attribute', () => {
    const wrapper = mount(ResponsiveImage, {
      props: {
        smallImage: smallImage,
        mediumImage: mediumImage,
        largeImage: largeImage,
        alt
      }
    })
    const img = wrapper.find('img')

    expect(img.attributes('srcset')).toBe(
      `${smallImage} 480w, ${mediumImage} 800w, ${largeImage} 1200w`
    )
  })
  it('has a well-defined alt attribute', () => {
    const wrapper = mount(ResponsiveImage, {
      props: {
        smallImage: smallImage,
        alt
      }
    })
    const img = wrapper.find('img')

    expect(img.attributes('alt')).toBe(alt)
  })
  it("adapts srcset and sizes if there isn't a large image", () => {
    const wrapper = mount(ResponsiveImage, {
      props: {
        smallImage: smallImage,
        mediumImage: mediumImage,
        alt
      }
    })
    const img = wrapper.find('img')

    expect(img.attributes('srcset')).toBe(`${smallImage} 480w, ${mediumImage} 800w`)
    expect(img.attributes('sizes')).toBe('(max-width: 600px) 480px, 800px')
  })
  it("adapts srcset and sizes if there isn't a medium image", () => {
    const wrapper = mount(ResponsiveImage, {
      props: {
        smallImage: smallImage,
        largeImage: largeImage,
        alt
      }
    })
    const img = wrapper.find('img')

    expect(img.attributes('srcset')).toBe(`${smallImage} 480w, ${largeImage} 1200w`)
    expect(img.attributes('sizes')).toBe('(max-width: 600px) 480px, 1200px')
  })
  it("adapts srcset and sizes if there isn't any medium or large image", () => {
    const wrapper = mount(ResponsiveImage, {
      props: {
        smallImage: smallImage,
        alt
      }
    })
    const img = wrapper.find('img')

    expect(img.attributes('srcset')).toBe('')
    expect(img.attributes('sizes')).toBe('')
  })
})
