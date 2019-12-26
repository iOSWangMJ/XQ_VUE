import {Vue} from './utils/common'
import App from './App.vue'
import router from './router'
import store from './store'

//离线插件
import * as OfflinePluginRuntime from 'offline-plugin/runtime'


OfflinePluginRuntime.install()

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
