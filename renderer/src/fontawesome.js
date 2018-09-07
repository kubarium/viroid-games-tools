import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faWindowClose,
    faAtlas,
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
    faGlobe,
    faShieldAlt,
    faFileAlt
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

[
    faWindowClose,
    faAtlas,
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
    faGlobe,
    faFileAlt,
    faShieldAlt
].forEach(icon => library.add(icon))

Vue.component('font-awesome-icon', FontAwesomeIcon)
