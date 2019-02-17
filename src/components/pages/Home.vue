<template lang="pug">
  layout
</template>

<script>
import layout from '../sections/main/Layout'

export default {
  name: 'Home',
  components: {
    layout
  },
  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          'Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.'
      }
    ]
  }
}
</script>
