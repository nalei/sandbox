<template lang="pug">
  #app
    .header
      b-container
        .d-flex.justify-content-between
          h3.text-muted
            | vue-ssr-boilerplate
          b-nav.nav-pills.float-right
            b-nav-item(to="/" exact) Home
            b-nav-item(to="/about") About
            b-nav-item(to="/contact") Contact

    .container
      b-carousel(
        v-if="$route.name === 'home'"
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

        // Text slides with image
        b-carousel-slide(
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52")

        // Slides with custom text
        b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=54")
          h1 Hello world!

      b-alert(
        v-if="message"
        :variant="`${message.type}`")
         | {{ message.body }}
      router-view

    .footer
      b-container
        p
          font-awesome-icon(icon="code")
          | with
          font-awesome-icon(icon="heart")
          | by mycompany.com

</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    titleTemplate: '%s | Vue SSR Boilerplate',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      message: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
