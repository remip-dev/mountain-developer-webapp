import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ScreenOverview from '@/components/projects/ScreenOverview.vue'

describe('ScreenOverview.vue', () => {
  it('should render with three images max', () => {
    const images: string[] = [
      'https://drive.google.com/uc?id=FILE_ID_1',
      'https://drive.google.com/uc?id=FILE_ID_2',
      'https://drive.google.com/uc?id=FILE_ID_3',
      'https://drive.google.com/uc?id=FILE_ID_4'
    ]
    const wrapper = mount(ScreenOverview, {
      props: { images }
    })

    const imgElements = wrapper.findAll('img')
    expect(imgElements.length).toBe(3)
    expect(imgElements[0].attributes('src')).toBe(images[0])
    expect(imgElements[1].attributes('src')).toBe(images[1])
    expect(imgElements[2].attributes('src')).toBe(images[2])
  })

  it('should render with one image when there is only one', () => {
    const images: string[] = ['https://drive.google.com/uc?id=FILE_ID_1']
    const wrapper = mount(ScreenOverview, {
      props: { images }
    })

    const imgElements = wrapper.findAll('img')
    expect(imgElements.length).toBe(1)
    expect(imgElements[0].attributes('src')).toBe(images[0])
  })

  it('should not render if there are no images', () => {
    const images: string[] = []
    const wrapper = mount(ScreenOverview, {
      props: { images }
    })

    expect(wrapper.html()).toBe('<!--v-if-->')
  })
})
