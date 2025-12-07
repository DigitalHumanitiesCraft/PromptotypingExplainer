import { mount } from 'svelte'
import './app.css'
import VaultPage from './lib/components/pages/VaultPage.svelte'

const app = mount(VaultPage, {
  target: document.getElementById('app'),
})

export default app
