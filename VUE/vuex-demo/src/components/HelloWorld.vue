<template>
  <div class="hello">
   {{ this.$store.state.count }}
   <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
