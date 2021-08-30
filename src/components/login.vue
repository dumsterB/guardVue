<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" label=" name" required></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="passphrase" :counter="10" label="password" required></v-text-field>
          </v-col>
          <br />
          <v-col cols="12" md="4">
            <v-btn @click="login" class="primary">submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
      {{$store.state.users}}
      {{$store.state.user}}
    </v-form>
  </div>
</template>

<script >

export default {
  data() {
    return {
      passphrase: "",
      name: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("LOGIN_COMPARE", {
          username: this.name,
          passphrase: this.passphrase,
        })
          this.$router.replace({
            name: "Main",
        });
     }
  }
}
</script>
