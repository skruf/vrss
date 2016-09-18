import Vue from "vue"
import VueMdl from "vue-mdl"
import { sync } from "vuex-router-sync"

import router from "./router"
import store from "./store"

import App from "./components/App"

Vue.use(VueMdl)
Vue.config.debug = true

router.start({
  store,
  components: { App: Vue.extend(App) }
}, "body")

sync(store, router)

router.go("/feeds")
