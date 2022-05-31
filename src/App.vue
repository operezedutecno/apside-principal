<template>
  <div id="app">
    <v-container>
      <apside-list :url="url" :titles="titles"></apside-list>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      url: "https://jsonplaceholder.typicode.com/users",
      titles: [
        { text: 'Id', value: 'id'},
        { text: 'Nombre', value: 'name'},
        { text: 'Correo electrónico', value: 'email'},
        { text: 'Usuario', value: 'username' }
      ]
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
