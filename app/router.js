import Vue from "vue"
import VueRouter from "vue-router"

import Feeds from "./components/Feeds.vue"
// import Feed from "./components/Feed.vue"

Vue.use(VueRouter)

const router = new VueRouter()

router.map({

  "/feeds": {
    name: "feeds",
    component: Feeds
  }
  // "/feeds/:id": {
  //   name: "feed",
  //   component: Feed
  // }

})

router.beforeEach(({ next, redirect, to}) => {
  console.debug(`transitioning to ${to.name}`)
  next()
})

export default router
