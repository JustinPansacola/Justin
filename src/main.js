import { createApp } from '../node_modules/vue/dist/vue.esm-bundler.js'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faGithub, faLinkedin)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
