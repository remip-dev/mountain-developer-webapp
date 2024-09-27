import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleButton from '../SimpleButton.vue'

let wrapper: any

beforeEach(() => {
  wrapper = mount(SimpleButton, {
    props: {
      text: 'CLICK'
    }
  })
})
describe('SimpleButton.vue', () => {
  it('renders with the right text', () => {
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('CLICK')
  })
  it('emits click when clicked', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted('clicked')).toHaveLength(1)
  })
})
