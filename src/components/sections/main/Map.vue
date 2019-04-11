<template lang="pug">
  #map.map
</template>

<script>
/* eslint-disable */
let sanfrancisco = [37.782685, -122.411364]

export default {
  props: {
    latitude: {
      type: Number,
      default() {
        return sanfrancisco[0]
      }
    },
    longitude: {
      type: Number,
      default() {
        return sanfrancisco[1]
      }
    },
    zoom: {
      type: Number,
      default() {
        return 14
      }
    }
  },
  mounted() {
    this.$map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: this.zoom
    })
    this.$marker = new google.maps.Marker({
      position: {lat: this.latitude, lng: this.longitude},
      map: this.$map
    })
  }
}
</script>

<style>
.map {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  display: inherit;
  overflow: hidden;
}
</style>
