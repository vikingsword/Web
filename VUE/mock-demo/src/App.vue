<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  
  mounted:function() {
    axios.get("/product/search").then(
      res => {
        console.log(res)
      }
    )
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
