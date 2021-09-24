<template>
  <div class="my-map">
    <GmapMap :center="center" :zoom="16" style="width:100%;  height: 450px;"/>
  </div>
</template>

<script>
export default {
  name: "MyMap",
  data: () => ({
    center: {lat: 34.101337362465614, lng: -118.3436514158035}
  }),
}
</script>

<style scoped>
.my-map {
  margin-bottom: 60px;
}
</style>