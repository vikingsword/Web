<template>
  <div class="hello">
    <!-- 使用computed而不是下面的 -->
   <!-- {{ this.$store.state.count }} -->
   {{ count }}

   <button @click="add">+1</button>

   <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    <!-- <li v-for="todo in doneTodos" :key="todo.id">{{ todo.text }}</li> -->

   </ul>
  </div>
</template>

<script>
import store from '@/store';
import {mapState,mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  // computed:{
  //   count() {
  //     return store.state.count
  //   }
  // },
  // 计算属性
  computed: mapState([
    ...mapState([
      'count', 'todos'
    ]),
    ...mapGetters([
      'doneTodos'
    ])
  ]),
  methods: {
    add() {
      // this.$store.state.count += 1
      // 应该通过 mutation 修改
      this.$store.commit("increment")
    }
  }
}
</script>

<style scoped>


</style>
