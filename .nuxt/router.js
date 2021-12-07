import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b4d6f80 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _e3f34984 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _534c283a = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _3184da16 = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _6ebb73f1 = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _715e455c = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _fc438dc0 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _340c80c7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0b4d6f80,
    name: "about"
  }, {
    path: "/admin",
    component: _e3f34984,
    name: "admin"
  }, {
    path: "/posts",
    component: _534c283a,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _3184da16,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _6ebb73f1,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _715e455c,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _fc438dc0,
    name: "posts-id"
  }, {
    path: "/",
    component: _340c80c7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
