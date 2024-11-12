import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderComponent from '../../header/HeaderComponent.vue'
import SiteName from '../../header/SiteName.vue'
import NavigationMenu from '../../header/NavigationMenu.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    path: '/'
  })
}))

describe('HeaderComponent.vue', () => {
  it('renders the correct components', () => {
    const wrapper = mount(HeaderComponent, {
      global: {
        stubs: {
          RouterLink: true
        }
      }
    })
    expect(wrapper.findComponent(SiteName).exists()).toBe(true)
    expect(wrapper.findComponent(NavigationMenu).exists()).toBe(true)
  })
  it('has a DOM well-structured', () => {
    const wrapper = mount(HeaderComponent, {
      global: {
        stubs: {
          RouterLink: true
        }
      }
    })
    expect(wrapper.find('header').exists()).toBe(true)
  })
})
