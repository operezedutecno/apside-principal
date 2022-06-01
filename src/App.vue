<template>
  <div id="app">
    <v-container>
      <apside-list title="Listado de Usuarios" :url="url" :titles="titles"></apside-list>
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
        { text: 'Página Web', value: 'website'},
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
