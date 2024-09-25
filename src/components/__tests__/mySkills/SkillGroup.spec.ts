import { describe, it, expect, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import SkillGroup from '@/components/mySkills/SkillGroup.vue'
import SkillModal from '@/components/mySkills/SkillModal.vue'
import { vi } from 'vitest'
import smallImg1 from '@/assets/images/mySkills/devops/mountain_devops_small.webp'
import smallImg2 from '@/assets/images/mySkills/devops/devops_small.webp'
import mediumImg1 from '@/assets/images/mySkills/devops/mountain_devops_medium.webp'
import mediumImg2 from '@/assets/images/mySkills/devops/devops_medium.webp'

let wrapper: any
let mountainImage: any
let skillsImage: any
let modal: any

beforeEach(async () => {
  vi.mock('import.meta', () => ({
    glob: () => ({
      '@/assets/images/mySkills/devops/mountain_devops_small.webp': () =>
        Promise.resolve({ default: smallImg1 }),
      '@/assets/images/mySkills/devops/devops_small.webp': () =>
        Promise.resolve({ default: smallImg2 }),
      '@/assets/images/mySkills/devops/mountain_devops_medium.webp': () =>
        Promise.resolve({ default: mediumImg1 }),
      '@/assets/images/mySkills/devops/devops_medium.webp': () =>
        Promise.resolve({ default: mediumImg2 })
    })
  }))

  wrapper = mount(SkillGroup, {
    props: {
      mountainImage: 'mySkills/devops/mountain_devops',
      skillsImage: 'mySkills/devops/devops',
      title: 'Hi guys',
      description: 'This is a modal.'
    }
  })
  await flushPromises()

  mountainImage = wrapper.find('.mountain-image')
  skillsImage = wrapper.find('.skills-image')
  modal = wrapper.findComponent(SkillModal)
})

describe('SkillGroup.vue', () => {
  it('renders in the init state', () => {
    expect(mountainImage.exists()).toBe(true)
    expect(skillsImage.exists()).toBe(true)
    expect(modal.exists()).toBe(false)
    expect(mountainImage.classes()).not.toContain('hidden')
    expect(skillsImage.classes()).toContain('hidden')
  })
  it("emits 'skills' and changes state when hover", async () => {
    await wrapper.find('.trigger-div').trigger('mouseenter')

    modal = wrapper.findComponent(SkillModal)

    expect(mountainImage.classes()).toContain('hidden')
    expect(skillsImage.classes()).not.toContain('hidden')
    expect(modal.isVisible()).toBe(true)
    expect(wrapper.emitted('skills')).toHaveLength(1)
  })
  it("emits 'skills' and changes state when mouseleave", async () => {
    await wrapper.find('.trigger-div').trigger('mouseenter')
    await wrapper.find('.trigger-div').trigger('mouseleave')

    modal = wrapper.findComponent(SkillModal)

    expect(mountainImage.classes()).not.toContain('hidden')
    expect(skillsImage.classes()).toContain('hidden')
    expect(modal.exists()).toBe(false)
    expect(wrapper.emitted('skills')).toHaveLength(2)
  })
  it("emits 'skills' and changes state when click", async () => {
    await wrapper.find('.trigger-div').trigger('click')

    modal = wrapper.findComponent(SkillModal)

    expect(mountainImage.classes()).toContain('hidden')
    expect(skillsImage.classes()).not.toContain('hidden')
    expect(modal.isVisible()).toBe(true)
    expect(wrapper.emitted('skills')).toHaveLength(1)
  })
})
