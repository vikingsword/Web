<template>
    <!-- vue2 中多个组件都要包含在一个根组件下， 不能有两个 div -->
    <div>
        <h1>{{title}}</h1>
    </div>    
</template>


<script>
    export default{
        name: "movies",
        data: function() {
            return {
                title: "breaking bad !"
            }
        }
    }
</script>

<style>

</style>