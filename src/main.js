import { createApp } from 'vue'
import App from './App.vue'
import PageHeader from './components/Layouts/PageHeader.vue'

const app = createApp(App)

app.component('PageHeader', PageHeader)

app.mount('#app')
