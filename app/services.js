import uuid from "uuid"

/* eslint-disable no-undef */
const db = new PouchDB("nsu", {
  adapter: "websql"
})

export const getFeeds = () => {
  return new Promise((resolve, reject) => {
    db.allDocs({ include_docs: true })
    .then((response) => {
      var data = []
      response.rows.forEach((row) => { data.push(row.doc) })
      resolve(data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}
export const getFeed = (id) => {
  return new Promise((resolve, reject) => {
    db.get(id)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}
export const storeFeed = (feed) => {
  feed._id = uuid.v4()
  return new Promise((resolve, reject) => {
    db.put(feed)
    .then((response) => {
      db.get(response.id)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
    })
    .catch((error) => {
      reject(error)
    })
  })
}
export const destroyFeed = (feed) => {
  return new Promise((resolve, reject) => {
    db.remove(feed)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export const getEntries = () => {
  return new Promise((resolve, reject) => {
    db.allDocs({ include_docs: true })
    .then((response) => {
      var data = []
      response.rows.forEach((row) => { data.push(row.doc) })
      resolve(data)
    })
    .catch((error) => {
      reject(error)
    })
  })
}
export const getEntry = (id) => {
  return new Promise((resolve, reject) => {
    db.get(id)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}
export const storeEntry = (entry) => {
  entry._id = uuid.v4()
  return new Promise((resolve, reject) => {
    db.put(entry)
    .then((response) => {
      db.get(response.id)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
    })
    .catch((error) => {
      reject(error)
    })
  })
}
export const destroyEntry = (entry) => {
  return new Promise((resolve, reject) => {
    db.remove(entry)
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}
