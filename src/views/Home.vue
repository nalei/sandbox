<template lang="pug">
  .mdl-card.mdl-shadow--2dp
    .mdl-card__title.mdl-card--expand
      form(action='#')
        .mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label.is-upgraded
          input#Name.mdl-textfield__input(pattern='[A-Z,a-z, ]*', type='text')
          label.mdl-textfield__label(for='Name') Name...
          span.mdl-textfield__error Letters and spaces only
        .mdl-textfield.mdl-js-textfield.mdl-textfield--floating-label.is-upgraded
          input#Email.mdl-textfield__input(type='text')
          label.mdl-textfield__label(for='Email') Email...
        button.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.mdl-button--accent.mdl-color-text--white(type='submit')
          | Read More
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hello from '@/components/Hello.vue'; // @ is an alias to /src

@Component({
  components: {
    Hello,
  },
})
export default class Home extends Vue {
  mounted() {
    require('material-design-lite');
  }
  updated() {
    require('material-design-lite');
  }
}
</script>
