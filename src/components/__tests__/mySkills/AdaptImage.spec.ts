import { describe, it, expect, beforeEach, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import AdaptImage from '@/components/mySkills/AdaptImage.vue'
import smallWorker from '@/assets/images/mySkills/worker/worker_small.webp'
import mediumWorker from '@/assets/images/mySkills/worker/worker_medium.webp'
import smallMountainer from '@/assets/images/mySkills/mountainer/mountainer_small.webp'
import mediumMountainer from '@/assets/images/mySkills/mountainer/mountainer_medium.webp'

let wrapper: any

beforeEach(async () => {
  vi.mock('import.meta', () => ({
    glob: () => ({
      '@/assets/images/mySkills/worker/worker_small.webp': () =>
        Promise.resolve({ default: smallWorker }),
      '@/assets/images/mySkills/worker/worker_medium.webp': () =>
        Promise.resolve({ default: mediumWorker }),
      '@/assets/images/mySkills/mountainer/mountainer_small.webp': () =>
        Promise.resolve({ default: smallMountainer }),
      '@/assets/images/mySkills/mountainer/mountainer_medium.webp': () =>
        Promise.resolve({ default: mediumMountainer })
    })
  }))

  wrapper = mount(AdaptImage, {
    props: {
      firstImage: 'mySkills/worker/worker',
      secondImage: 'mySkills/mountainer/mountainer',
      alt: 'this is an image',
      isSkillVisible: false
    }
  })

  await flushPromises()
})

describe('AdaptImage.vue', () => {
  it('renders in init state', () => {
    expect(wrapper.find('.first-image').exists()).toBe(true)
    expect(wrapper.find('.second-image').exists()).toBe(true)
    expect(wrapper.find('.first-image').classes()).not.toContain('hidden')
    expect(wrapper.find('.second-image').classes()).toContain('hidden')
  })
  it('changes state with skill prop', async () => {
    await wrapper.setProps({ isSkillVisible: true })

    expect(wrapper.find('.first-image').classes()).toContain('hidden')
    expect(wrapper.find('.second-image').classes()).not.toContain('hidden')
  })
})
