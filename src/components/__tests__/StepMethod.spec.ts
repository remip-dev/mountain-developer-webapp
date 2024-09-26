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
      number: 1,
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
    expect(wrapper.find('.number').text()).toBe('1')
    expect(wrapper.find('.step-image').attributes('src')).toBe(
      '/src/assets/images/myMethod/step01/step_01_small.webp'
    )
    expect(wrapper.find('.step-image').attributes('alt')).toBe('image description')
    expect(wrapper.find('.step-title').text()).toBe('Step 1')
    expect(wrapper.find('.step-description').text()).toBe('Hi guys !')
    expect(wrapper.find('.container').classes()).toContain('orange')
  })
})
