import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faWindowClose, faWindowMinimize, faWindowMaximize, faWindowRestore} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

[faWindowClose, faWindowMinimize, faWindowMaximize, faWindowRestore].forEach(icon => library.add(icon))

Vue.component('font-awesome-icon', FontAwesomeIcon)
