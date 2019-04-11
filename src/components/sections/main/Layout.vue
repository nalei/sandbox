<template lang="pug">
  main
    section.mapper
      .mapper-left
        .mapper-left_wrapper
          map-component

      aside.mapper-right
        .mapper-right_wrapper
          b-container.posts(fluid)

            b-form-row.posts_loading(v-if="loading") Loading...

            b-form-row(v-for="post in posts" :key="post.id")
              post-component(:post="post")

</template>

<script>
import mapComponent from './Map'
import postComponent from './Post'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Layout',
  components: {
    mapComponent,
    postComponent
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      loading: 'loading'
    })
  },
  asyncData({ store }) {
    /**
     * Серверный преген
     */
    return store.dispatch('FETCH_POSTS')
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    ...mapActions({
      fetchPosts: 'FETCH_POSTS'
    })
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
    .posts {
      &_loading {
        justify-content: center;
      }
    }
  }
</style>
