import { describe, it, expect, beforeEach, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import StepMethod from '../StepMethod.vue'
import { Color } from '@/enum/Color'
import smallImage from '@/assets/images/myMethod/step01/step_01_small.webp'
import mediumImage from '@/assets/images/myMethod/step01/step_01_medium.webp'
import largeImage from '@/assets/images/myMethod/step01/step_01_large.webp'

let wrapper: any

vi.mock('@/utils/imageLoader', () => ({
  importImage: vi.fn((imageName, size) => {
    if (imageName === 'myMethod/step01/step_01') {
      if (size === 'small') {
        return smallImage
      } else if (size === 'medium') {
        return mediumImage
      } else {
        return largeImage
      }
    }
  })
}))

beforeEach(async () => {
  wrapper = mount(StepMethod, {
    props: {
      number: '01',
      imagePath: 'myMethod/step01/step_01',
      title: 'Step 1',
      description: '<p>Hi guys !</p>',
      color: Color.Orange,
      altImage: 'image description'
    }
  })
  await flushPromises()
})

describe('StepMethod.vue', () => {
  it('renders with its values corresponding to its props', () => {
    expect(wrapper.find('.number').text()).toBe('01')
    expect(wrapper.find('.image').attributes('src')).toBe(
      '/src/assets/images/myMethod/step01/step_01_small.webp'
    )
    expect(wrapper.find('.image').attributes('alt')).toBe('image description')
    expect(wrapper.find('h2').text()).toBe('Step 1')
    expect(wrapper.find('.description').text()).toBe('Hi guys !')
    expect(wrapper.find('.background').classes()).toContain('orange')
  })
})
