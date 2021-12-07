<template>
  <div>
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav" />
    <TheSideNav :show="displaySideNav" @close="displaySideNav = false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader.vue'
import TheSideNav from '@/components/Navigation/TheSidenav.vue'
export default {
  components: {
    TheHeader,
    TheSideNav,
  },
  data() {
    return {
      displaySideNav: false,
    }
  },
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
