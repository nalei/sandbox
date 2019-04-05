<template lang="pug">
  #app
    // header-component
    router-view
    footer-component
</template>

<script>
import headerComponent from './components/sections/Header.vue'
import footerComponent from './components/sections/Footer.vue'
export default {
  name: 'App',
  metaInfo: {
    titleTemplate: '%s | Vue SSR Boilerplate',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    ]
  },
  components: {
    headerComponent,
    footerComponent
  }
}
</script>
