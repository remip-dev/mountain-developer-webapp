import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillModal from '@/components/mySkills/SkillModal.vue'

describe('SkillModal.vue', () => {
  it('renders with the right texts', () => {
    const wrapper = mount(SkillModal, {
      props: {
        title: 'Hello World',
        description: 'How are you Sir ?'
      }
    })

    expect(wrapper.find('.title').text()).toBe('Hello World')
    expect(wrapper.find('.description').text()).toBe('How are you Sir ?')
  })
})
