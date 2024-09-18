import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Menu from '../../header/NavigationMenu.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/method', name: 'method', component: { template: '<div>Method</div>' } },
    { path: '/projects', name: 'projects', component: { template: '<div>Projects</div>' } },
    { path: '/contact', name: 'contact', component: { template: '<div>Contact</div>' } }
  ]
})

describe('Menu.vue', () => {
  it('renders the correct menu items', () => {
    const wrapper = mount(Menu, {
      global: {
        plugins: [router]
      }
    })

    const links = wrapper.findAll('a')
    expect(links.length).toBe(4)
    expect(links.at(0)?.text()).toBe("L'Accueil")
    expect(links.at(1)?.text()).toBe('La Méthode')
    expect(links.at(2)?.text()).toBe('Les Projets')
    expect(links.at(3)?.text()).toBe('Contact')
  })

  it('applies active class to the active route', async () => {
    await router.push('/method')
    await router.isReady()

    const wrapper = mount(Menu, {
      global: {
        plugins: [router]
      }
    })

    await wrapper.vm.$nextTick()

    const activeLink = wrapper.find('a.active')
    expect(activeLink.exists()).toBe(true)
    expect(activeLink.text()).toBe('La Méthode')
  })
})
