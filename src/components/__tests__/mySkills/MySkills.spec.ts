import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MySkills from '@/components/mySkills/MySkills.vue'
import SkillGroup from '@/components/mySkills/SkillGroup.vue'
import AdaptImage from '@/components/mySkills/AdaptImage.vue'

describe('MySkills.vue', () => {
  it('renders the correct components'),
    () => {
      const wrapper = mount(MySkills)
      expect(wrapper.findAllComponents(SkillGroup)).toHaveLength(4)
      expect(wrapper.findAllComponents(AdaptImage)).toHaveLength(2)
    }
})
