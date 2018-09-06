import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faWindowClose,
    faWindowMinimize,
    faWindowMaximize,
    faWindowRestore,
    faHome,
    faGem,
    faUsers,
    faFlask,
    faShip,
    faBeer,
    faBed,
    faPaw,
    faFlag,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

[
    faWindowClose,
    faWindowMinimize,
    faWindowMaximize,
    faWindowRestore,
    faHome,
    faGem,
    faUsers,
    faFlask,
    faShip,
    faBeer,
    faBed,
    faPaw,
    faFlag,
    faGlobe
].forEach(icon => library.add(icon))

Vue.component('font-awesome-icon', FontAwesomeIcon)
