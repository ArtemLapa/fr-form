<template>
  <div class="users">
    <h1 class="users__title">All members ({{countAllMembers}})</h1>
<!--    <div v-for="(user, idx) in users" :key="idx" class="user__wrapper">
      <h3>{{ user.name }} {{ user.lastName }}</h3>
      <p>{{ user.country }}</p>
      <p>{{ user.birthday }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
    </div>-->
    <b-table striped hover :items="users"></b-table>
  </div>
</template>

<script>
import { db } from "@/firebase.js";

export default {
  name: "FireStore",
  data: () => ({
    users: [],
    currentUser: null,
  }),
  computed: {
    countAllMembers() {
      return this.users.length
    }
  },
  firestore () {
    return {
      users: db.collection("users")
    }
  },
}
</script>

<style lang="scss">
$style: "users";
.#{$style} {
  &__title {
    text-align: center;
    margin-bottom: 60px;
  }
}

</style>
