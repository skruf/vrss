import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  feeds: [],
  feed: {},
  entries: [],
  entry: {}
}

const mutations = {
  SET_FEEDS(state, feeds) {
    state.feeds = feeds
  },
  SET_FEED(state, feed) {
    state.feed = feed
  },
  REMOVE_FEED(state, feed) {
    state.feeds.$remove(feed)
  },
  
  ADD_FEED(state, feed) {
    state.feeds = {
      ...state.feeds,
      feed
    }
  },

  SET_ENTRIES(state, entries) {
    state.entries = entries
  },
  SET_ENTRY(state, entry) {
    state.entry = entry
  },

  FLASH_ERROR(state, error) {
    state.error = error
    console.error(error)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
