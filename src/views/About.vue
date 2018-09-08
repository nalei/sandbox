<template lang="pug">
  .div
    .demo-updates.mdl-card.mdl-shadow--2dp
      .mdl-card__title.mdl-card--expand.mdl-color--teal-300
        h2.mdl-card__title-text {{ msg }}
      .mdl-card__supporting-text.mdl-color-text--grey-600
        | Non dolore elit adipisicing ea reprehenderit consectetur culpa.
      .mdl-card__actions.mdl-card--border
        a.mdl-button.mdl-js-button.mdl-js-ripple-effect(href='#') Read More
      .mdl-card__menu
        button.mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect
          i.material-icons share
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  msg: string = 'Hello world';
}
</script>

<style>
.demo-updates .mdl-card__title {
  min-height: 200px;
  background-image: url('../assets/dog.png');
  background-position: 90% 100%;
  background-repeat: no-repeat;
}
</style>

