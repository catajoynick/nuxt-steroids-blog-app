import createApp from './app.js'

import databaseService from './service.database.js'

const appConfig = {"apiKey":"AIzaSyCYVM7hEVXPdqUE1jcwf4PVyy01V-vv9Kk","authDomain":"nuxt-blog-fd377.firebaseapp.com","databaseURL":"https:\u002F\u002Fnuxt-blog-fd377-default-rtdb.firebaseio.com","projectId":"nuxt-blog-fd377","storageBucket":"nuxt-blog-fd377.appspot.com","messagingSenderId":"1009041324899","appId":"1:1009041324899:web:f5b31a5faf30f65fccb156","measurementId":"G-9TDT0F1PNQ"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      databaseService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      databaseService(session, firebase, ctx, inject),

    ]
  }

  const [
    database
  ] = await Promise.all(servicePromises)

  const fire = {
    database: database
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}