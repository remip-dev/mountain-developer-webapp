import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RatingScale from '@/components/projects/RatingScale.vue'

describe('RatingScale.vue', () => {
  it('should render with the right account of colored mountains', () => {
    const wrapper = mount(RatingScale, {
      props: {
        mark: 4
      }
    })
    expect(wrapper.findAll('.colored')).toHaveLength(4)
  })
  it('should renders with 5 mountains', () => {
    const wrapper = mount(RatingScale, {
      props: {
        mark: 2
      }
    })
    expect(wrapper.findAll('.mountain')).toHaveLength(5)
  })
})
