import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AdaptImage from '@/components/mySkills/AdaptImage.vue'

let wrapper: any

beforeEach(() => {
  wrapper = mount(AdaptImage, {
    props: {
      firstImage: 'mySkills/worker/worker',
      secondImage: 'mySkills/mountainer/mountainer',
      alt: 'this is an image',
      isSkillVisible: false
    }
  })
})

describe('AdaptImage.vue', () => {
  it('renders in init state', () => {
    expect(wrapper.find('.first-image').exists()).toBe(true)
    expect(wrapper.find('.second-image').exists()).toBe(true)
    expect(wrapper.find('.first-image').isVisible()).toBe(true)
    expect(wrapper.find('.second-image').isVisible()).toBe(false)
  })
  it('changes state with skill prop', async () => {
    await wrapper.setProps({ isSkillVisible: true })

    expect(wrapper.find('.first-image').isVisible()).toBe(false)
    expect(wrapper.find('.second-image').isVisible()).toBe(true)
  })
})
