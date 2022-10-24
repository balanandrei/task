<template>
  <div class="about">
    <h1>You are logged in</h1>
    <v-btn @click="logoutHandler()"> Log out </v-btn>
  </div>
</template>

<script>
export default {
  name: "IndexView",
  methods: {
    logoutHandler() {
      localStorage.setItem("authenticated", false);
      this.$router.push({ name: "login" });
    },
  },
};
</script>
