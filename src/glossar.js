import { mount } from 'svelte'
import './app.css'
import GlossarPage from './lib/components/pages/GlossarPage.svelte'

const app = mount(GlossarPage, {
  target: document.getElementById('app'),
})

export default app
