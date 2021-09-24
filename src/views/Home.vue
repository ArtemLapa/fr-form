<template>
  <div class="home">
    <MyMap/>
    <b-container>
      <RFForm/>
    </b-container>
  </div>
</template>

<script>
import MyMap from "@/components/MyMap.vue";
import RFForm from "@/components/RFForm.vue";

export default {
  name: 'Home',
  components: {
    MyMap,
    RFForm,
  },
  data: () => ({

  }),
}
</script>