<template lang="pug">
  main
    section.mapper
      .mapper-left
        .mapper-left_wrapper
          // map-component

      aside.mapper-right
        .mapper-right_wrapper
          b-container(fluid)

            b-form-row(v-for="post in posts" :key="post.id")
              .card
                .row.no-gutters
                  .col-md-3(v-if="(post.thumbnail != 'default') && (post.thumbnail != 'self')")
                    a(:href="post.url")
                      img.media-object(:src="post.thumbnail")

                  .col-md-9
                    .card-body
                      p.card-meta
                        | Published
                        span.meta-bit {{ convertTime(post.created) }}
                        | at
                        span.meta-bit {{ post.domain }}
                      h5.card-title
                        a(:href="post.url" target="_blank") {{ post.title }}
                      p.card-text
                        font-awesome-icon(:icon="['far', 'thumbs-up']")
                        span {{ post.score }}
                        font-awesome-icon(:icon="['far', 'comment']")
                        span {{ post.num_comments }}
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
      posts: 'getPosts'
    })
  },
  // mounted() {
  //   /**
  //    * Получает топ 30 новостей Reddit, и записывает в posts
  //    * subReddit == 'all'
  //    */
  //   this.fetchPosts()
  // },
  methods: {
    ...mapActions({
      fetchPosts: 'FETCH_POSTS'
    }),
    convertTime(UNIXtimestamp) {
      const a = new Date(UNIXtimestamp * 1000)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const year = a.getFullYear()
      const month = months[a.getMonth()]
      const date = a.getDate()
      const hour = a.getHours()
      const min = a.getMinutes()
      const sec = a.getSeconds()

      return date + '.' + month + '.' + year
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
    .card {
      width: 100%;
      margin-bottom: 10px;
      &-meta {
        font-size: .9em;
        margin-bottom: 5px;
        span {
          margin-left: 4px;
          margin-right: 4px;
        }
      }
      &-text {
        svg.svg-inline--fa {
          width: 1em;
          vertical-align: -0.125em;
        }
        span {
          margin-left: 2px;
          margin-right: 13px;
        }
      }
    }

  }
</style>
