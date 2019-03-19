import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import {} from '@fortawesome/free-solid-svg-icons'

import { faThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons'

import {} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThumbsUp, faComment)

Vue.component('font-awesome-icon', FontAwesomeIcon)
