import axios from './request'
import Vue from 'vue'

const clone = data => {
    return JSON.parse(JSON.stringify(data))
}

Vue.prototype.$axios = axios
Vue.prototype.$clone = clone
