import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './style.css'
import App from './App.vue'

import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '../node_modules/@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faGithub, faLinkedin)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
