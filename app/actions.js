import * as service from "./services"

export const setFeeds = ({ dispatch }) => {
  service.getFeeds().then((response) => {
    dispatch("SET_FEEDS", response)
  }).catch((error) => {
    dispatch("FLASH_ERROR", error)
  })
}
export const setFeed = ({ dispatch }, id) => {
  service.getFeed(id).then((response) => {
    dispatch("SET_FEED", response)
  }).catch((error) => {
    dispatch("FLASH_ERROR", error)
  })
}
export const addFeed = ({ dispatch }, event) => {
  service.storeFeed(event).then((response) => {
    dispatch("SET_FEED", response)
  }).catch((error) => {
    dispatch("FLASH_ERROR", error)
  })
}
export const removeFeed = ({ dispatch }, event) => {
  service.destroyFeed(event).then(() => {
    dispatch("REMOVE_FEED", event)
  }).catch((error) => {
    dispatch("FLASH_ERROR", error)
  })
}

export const setEntries = ({ dispatch }) => {
  service.getEntries().then((response) => {
    dispatch("SET_ENTRIES", response)
  }).catch((error) => {
    dispatch("FLASH_ERROR", error)
  })
}
export const setEntry = ({ dispatch }, id) => {
  service.getEntry(id).then((response) => {
    dispatch("SET_ENTRY", response)
  }).catch((error) => {
    dispatch("FLASH_ERROR", error)
  })
}
