<template lang="pug">
  main
    section.mapper
      .mapper-left
        .mapper-left_wrapper
          map-component

      aside.mapper-right
        .mapper-right_wrapper
          b-container(fluid)

            //- .text-center(v-show="loading") Loading...
            b-form-row(v-for="post in posts" :key="post.id")
              .media-left(v-if="(post.thumbnail != 'default') && (post.thumbnail != 'self')")
                a(:href="post.url")
                  img.media-object(:src="post.thumbnail")
              .media-body
                p.meta
                  | Published
                  span.meta-bit {{ post.created }}
                  | at
                  span.meta-bit {{ post.domain }}
                h4
                  a(:href="post.url" target="_blank") {{ post.title }}
                p.stats
                  font-awesome-icon(:icon="['far', 'thumbs-up']")
                  span {{ post.score }}
                  font-awesome-icon(:icon="['far', 'comment']")
                  span {{ post.num_comments }}

            //- b-form-row
            //-   .card
            //-     b-carousel(
            //-       id="carousel1"
            //-       v-model="slide"
            //-       style="text-shadow: 1px 1px 2px #333;"
            //-       controls
            //-       indicators
            //-       background="#ababab"
            //-       :interval="4000"
            //-       img-width="1024"
            //-       img-height="480"
            //-       @sliding-start="onSlideStart"
            //-       @sliding-end="onSlideEnd")

            //-       b-carousel-slide(
            //-         caption="First slide"
            //-         text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            //-         img-src="https://picsum.photos/1024/480/?image=52")
            //-       b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=54")
            //-         h1 Hello world!
            //-       b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=58")
            //-       b-carousel-slide(img-src="https://picsum.photos/1024/480/?image=55")

            //-     .card-body
            //-       h5.card-title Card title
            //-       p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.

</template>

<script>
import mapComponent from './Map'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Layout',
  components: {
    mapComponent
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts',
      loading: 'loading'
    })
  },
  created() {
    /**
     * Получает топ 30 новостей Reddit, и записывает в posts
     * subReddit == 'all'
     */
    this.fetchPosts('all')
  },
  methods: {
    ...mapActions({
      fetchPosts: 'FETCH_POSTS'
    }),
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
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
      border-left: 1px solid #e6e6e6;
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
