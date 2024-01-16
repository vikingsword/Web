<template>
  <div id="app">
    <!-- 添加了 title 后相当于在 movie 中有了自定义的属性-->
    <!-- <Movie title="breaking bad"></Movie> -->
    <!-- <Movie rating="9.99"></Movie> -->
    <!-- 注意这里要在title和rating前面加上v-bind或者:进行绑定-->
    <Movie v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating"></Movie>  

    <Hello></Hello>

    <hr>
    <Date></Date>
    
  </div>
</template>

<script>
import Movie from './components/Movie.vue'
import Hello from './components/Hello.vue'
import Date from './components/Date.vue'
import axios from 'axios'

export default {
  name: 'App',
  data: function(){
    return {
      movies: [
        {id:1, title:"breaking bad", rating:9.9},
        {id:2, title:"better call soul", rating:9.8}
      ]
    }
  },
  created: function(){
    console.log("APP component created!")
    axios.get("http://localhost:8081/all")
    .then(function(resp){
      console.log(resp)
    })
  },
  mounted: function() {
    console.log("APP 组件被挂载完毕，渲染到界面上了")
  },
  components: {
    Movie,
    Hello,
    Date
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
