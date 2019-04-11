<template lang="pug">
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
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    convertTime(UNIXtimestamp) {
      const d = new Date(UNIXtimestamp * 1000)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const year = d.getFullYear()
      const month = months[d.getMonth()]
      const date = d.getDate()
      // const hour = d.getHours()
      // const min = d.getMinutes()
      // const sec = d.getSeconds()
      return date + '.' + month + '.' + year
    }
  }
}
</script>

<style lang="scss">
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
</style>

