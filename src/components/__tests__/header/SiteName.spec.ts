import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SiteName from '../../header/SiteName.vue'

describe('SiteName.vue', () => {
  it('renders the correct site name', () => {
    const wrapper = mount(SiteName)
    expect(wrapper.text()).toBe('RÉMI POLICET')
  })
  it('applies the correct styles'),
    () => {
      const wrapper = mount(SiteName)
      const siteNameElement = wrapper.find('div')
      expect(siteNameElement.classes()).toContain('site-name')
      expect(siteNameElement.element.style.fontSize).toBe('36px')
      expect(siteNameElement.element.style.fontWeight).toBe('700')
      expect(siteNameElement.element.style.color).toBe('var(--tertiary-color)')
      expect(siteNameElement.element.style.letterSpacing).toBe('30%')
    }
})
