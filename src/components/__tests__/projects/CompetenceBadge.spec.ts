import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CompetenceBadge from '@/components/projects/CompetenceBadge.vue'

describe('CompetenceBadge.vue', () => {
  it('should renders with the right competence label', () => {
    const wrapper = mount(CompetenceBadge, {
      props: {
        label: 'Skill'
      }
    })
    expect(wrapper.find('div').text()).toContain('Skill')
  })
})
