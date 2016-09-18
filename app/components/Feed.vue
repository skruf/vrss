<style lang="stylus" scope>
</style>

<template>
</template>

<script>
import Vue from "vue"
import * as actions from "../actions"
import * as getters from "../getters"

export default {

  name: "feed",

  vuex: {
    getters,
    actions
  },

  created() {
    this.setEvent(this.$route.params.id)
  },

  data() {
    return {
      tabs: {
        participants: true,
        results: false
      },
      edited: null,
      beforeEditCache: ""
    }
  },

  methods: {
    changeTab(tab) {
      if(tab === "participants") {
        this.tabs.participants = true
        this.tabs.results = false
      } else {
        this.tabs.participants = false
        this.tabs.results = true
      }
    },

    deleteEvent() {
      if(confirm("Er du sikker på at du vil slette dette stevne?")) {
        this.removeEvent(this.getEvent)
        this.$router.go("/feeds")
      }
    },

    editField(field) {
      this.beforeEditCache = this.getEvent[field]
      this.edited = field
    },

    doneEdit(field) {
      this.edited = null
      this.getEvent[field] = this.getEvent[field].trim()
      this.editEvent(this.getEvent)
    },

    cancelEdit(field) {
      this.edited = null
      this.getEvent[field] = this.beforeEditCache
    }
  },

  directives: {
    "input-focus": function(value) {
      if(!value) return
      var el = this.el
      Vue.nextTick(() => {
        el.focus()
      })
    }
  }

}
</script>
