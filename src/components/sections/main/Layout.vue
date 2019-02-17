<template lang="pug">
  main
    section.mapper
      .mapper-left
        .mapper-left_wrapper

      aside.mapper-right
        .mapper-right_wrapper
          b-container(fluid)

            p.card-text 'SECTION ALL POSTS'
              router-link(:to="'/HREF/'") 11111

            b-form-row
              .card
                b-carousel(
                  id="carousel1"
                  v-model="slide"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="1024"
                  img-height="480"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd")

                  b-carousel-slide(
                    caption="First slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=52")
                  b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=54")
                    h1 Hello world!
                  b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=58")
                  b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=55")

                .card-body
                  h5.card-title Card title
                  p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.

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
  name: 'Layout',
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Hello there',
      message: "That's the success!"
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Wow, man',
      message: "That's the kind of warning"
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Wow-wow',
      message: "That's the error"
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
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  }
}
</script>

<style lang="scss">
  main {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .mapper {
    position: relative;
    width: 100vw;
    height: 100%;
    display: flex;
    .mapper-left {
      position: relative;
      height: 100%;
      flex: 1 1 auto;
      &_wrapper {
        position: fixed;
        right: calc(100% - (100vw - 572px));
        bottom: 0;
        left: 0;
        overflow: hidden;
        height: 100%;
      }
    }
    .mapper-right {
      position: relative;
      width: 572px;
      height: 100%;
      max-width: 572px;
      border: 1px solid #e6e6e6;
      background: rgba(252,252,253,.9);
      flex: 1 1 572px;
      &_wrapper {
        position: relative;
        min-height: 100vh;
        padding: 60px 0 0;
        @media screen and (min-width: 771px) {
          margin-right: 15px;
        }
      }
    }
  }
</style>
