import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillGroup from '@/components/mySkills/SkillGroup.vue'
import SkillModal from '@/components/mySkills/SkillModal.vue'

let wrapper: any

beforeEach(() => {
  wrapper = mount(SkillGroup, {
    props: {
      mountainImage: 'image1',
      skillsImage: 'image2',
      title: 'Hi guys',
      description: 'This is a modal.'
    }
  })
})

describe('SkillGroup.vue', () => {
  it('renders in the init state', () => {
    expect(wrapper.find('.mountain-image').exists()).toBe(true)
    expect(wrapper.find('.skills-image').exists()).toBe(true)
    expect(wrapper.findComponent(SkillModal).exists()).toBe(true)
    expect(wrapper.find('.mountain-image').isVisible()).toBe(true)
    expect(wrapper.find('.skills-image').isVisible()).toBe(false)
    expect(wrapper.findComponent(SkillModal).isVisible()).toBe(false)
  })
  it("emits 'skills' and changes state when hover", async () => {
    await wrapper.trigger('mouseenter')

    expect(wrapper.find('.mountain-image').isVisible()).toBe(false)
    expect(wrapper.find('.skills-image').isVisible()).toBe(true)
    expect(wrapper.findComponent(SkillModal).isVisible()).toBe(true)
    expect(wrapper.emitted('skills')).toHaveLength(1)
  })
  it("emits 'skills' and changes state when mouseleave", async () => {
    await wrapper.trigger('mouseenter')
    await wrapper.trigger('mouseleave')

    expect(wrapper.find('.mountain-image').isVisible()).toBe(true)
    expect(wrapper.find('.skills-image').isVisible()).toBe(false)
    expect(wrapper.findComponent(SkillModal).isVisible()).toBe(false)
    expect(wrapper.emitted('skills')).toHaveLength(2)
  })
  it("emits 'skills' and changes state when click", async () => {
    await wrapper.trigger('click')

    expect(wrapper.find('.mountain-image').isVisible()).toBe(false)
    expect(wrapper.find('.skills-image').isVisible()).toBe(true)
    expect(wrapper.findComponent(SkillModal).isVisible()).toBe(true)
    expect(wrapper.emitted('skills')).toHaveLength(1)
  })
})
