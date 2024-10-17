import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HikeSign from '@/components/projects/HikeSign.vue'

describe('HkeSign.vue', () => {
  it('should renders with the right title and category', () => {
    const wrapper = mount(HikeSign, {
      props: {
        title: 'Personnal Project',
        category: 'web-app'
      }
    })
    expect(wrapper.find('.title').text()).toContain('Personnal Project')
    expect(wrapper.find('.category').text()).toContain('web-app')
  })
})
