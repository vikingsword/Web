<template>
    <!-- vue2 中多个组件都要包含在一个根组件下， 不能有两个 div -->
    <div>
        <h1>{{title}}</h1>
        <span>{{ rating }}</span>
        <button @click="addFavorite">点击收藏</button>
    </div>    
</template>


<script>
    export default{
        name: "movies",
        // 自定义属性
        props: ["title", "rating"],
        data: function() {
            return {

            }
        },
        created: function() {
            console.log("movie component created! ")
        },
        methods: {
            addFavorite() {
                alert("successfully")
            }
        }
    }
</script>

<style>

</style>