import { mount } from 'svelte'
import './app.css'
import BibliographiePage from './lib/components/pages/BibliographiePage.svelte'

const app = mount(BibliographiePage, {
  target: document.getElementById('app'),
})

export default app
