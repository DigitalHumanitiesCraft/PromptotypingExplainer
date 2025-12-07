import { mount } from 'svelte'
import './app.css'
import AboutPage from './lib/components/pages/AboutPage.svelte'

const app = mount(AboutPage, {
  target: document.getElementById('app'),
})

export default app
