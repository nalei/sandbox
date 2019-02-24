<template lang="pug">
  header
    b-navbar(toggleable="md")
      b-navbar-toggle.burger-menu(target="nav_collapse")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav
          b-nav-item(to="/" exact) Home
          b-nav-item(to="/about") About
          b-nav-item(to="/contact") Contact

        b-navbar-nav.ml-auto
          .row.marketing
            b-btn.mr-1(@click="openSwal") Sweet !
            b-btn.mr-1(variant="success" @click="showSuccessMsg()") Noty !
            b-btn.mr-1(variant="info" @click="showInfoMsg()") Noty !
            b-btn.mr-1(variant="warning" @click="showWarnMsg()") Noty !
            b-btn.mr-1(variant="danger" @click="showErrorMsg()") Noty !
</template>
<script>
import swal from 'sweetalert2'
import VueNotifications from 'vue-notifications'
export default {
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Hello there',
      message: 'That\'s the success!'
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Wow, man',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Wow-wow',
      message: 'That\'s the error'
    }
  },
  methods: {
    openSwal() {
      swal({
        title: 'Yo!',
        text: 'Yeaaah!',
        type: 'success',
        confirmButtonText: 'Cool'
      })
    }
  }
}
</script>


<style>
/* Custom page header */
header {
  z-index: 700;
  background-color: hsla(0,0%,100%,.95);
  box-shadow: 0 2px 4px 0 rgba(73,73,73,.1);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
