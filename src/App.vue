<template lang="pug">
  .mdl-layout.mdl-js-layout.mdl-layout--fixed-header
    header.mdl-layout__header.mdl-color--grey-100.mdl-color-text--grey-600
      .mdl-layout__header-row
        span.mdl-layout-title Vue Mdl
    .demo-drawer.mdl-layout__drawer.mdl-color--blue-grey-900.mdl-color-text--blue-grey-50
      span.mdl-layout-title Vue Mdl
      nav.mdl-navigation
        router-link.mdl-navigation__link(to='/', @click.native='hideMenu') Home
        router-link.mdl-navigation__link(to='/about', @click.native='hideMenu') About
    main.mdl-layout__content.mdl-color--grey-100
      .page-content
        .mdl-grid.demo-content
          router-view
</template>

<script>
  require('material-design-lite');
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
    hideMenu() {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible');
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible');
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.3.0/material.cyan-light_blue.min.css');
.demo-content {
  max-width: 1080px;
}
.demo-drawer {
  border: none;
}
</style>
