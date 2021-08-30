<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="link in links"    depressed
      color="primary" :key="link.key" :to="link.path">{{link.title}}</v-btn>
      <!-- <v-btn    depressed
      color="primary" to="/login" >login</v-btn> -->

    </v-app-bar>
    <v-main>
      <router-view />
      <br>
      <v-btn to="/home">home</v-btn>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({

  }),
  computed:{
    links(){
    return  this.$store.state.links

  },

  },
  mounted(){
    this.$router.replace({
      name:'Login'
    }).catch(()=>{})
  }
};
</script>
