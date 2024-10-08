import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleFooter from '../SimpleFooter.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>hello</div>' } },
    { path: '/legal-information', component: { template: '<div>Legal Information</div>' } }
  ]
})

describe('SimpleFooter.vue', () => {
  it('renders the correct text', () => {
    const wrapper = mount(SimpleFooter, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('Copyright ©Rémi Policet')
    expect(wrapper.text()).toContain('Mentions légales')
    expect(wrapper.text()).toContain('Annecy')
  })

  it('renders the legal link with the correct href', async () => {
    const wrapper = mount(SimpleFooter, {
      global: {
        plugins: [router]
      }
    })

    await router.isReady()

    const link = wrapper.findComponent({ name: 'RouterLink' })
    expect(link.exists()).toBe(true)
    expect(link.props('to')).toBe('/legal-information')
  })
})
