<template>
    <div>
        <set-title v-if='mtitle'>{{mtitle}}</set-title>
        歌单详情页--id{{$route.params.id}}

    </div>
</template>
<script>
export default {
    data(){
        return{
            mtitle:null
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss">

</style>

