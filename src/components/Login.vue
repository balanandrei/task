<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <router-link to="/index">Go to Index</router-link>

        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-post"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  :rules="passRules"
                  label="Passord"
                  type="password"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-alert v-if="invalidCredentials" color="pink darken-1" dark>
                  Invalid credentials
                </v-alert>
              </v-col>
              <v-col cols="6">
                <a href="">Glemt passord?</a>
              </v-col>
              <v-col cols="6">
                <v-btn :disabled="!valid" @click="loginHandler()">
                  Logg Inn
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import userList from "../json/users.json";

export default {
  name: "Login",

  data: () => ({
    valid: false,
    invalidCredentials: false,
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-post Påkrevd",
    ],
    passRules: [(v) => v.length >= 5 || "Min 5 characters"],
    users: userList,
  }),

  methods: {
    loginHandler() {
      const vm = this;

      this.invalidCredentials = false;

      function checkLogin() {
        const check = vm.users.some((el) => el.email === vm.email && el.password === vm.password);
        if (check === false) {
          vm.invalidCredentials = true;
        }
        console.log("check login", check);
      }
      checkLogin();
    },
  },
};

//using some
</script>
