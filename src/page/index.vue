<template>
    <div>
        <banner class="index-banner" :swiperDatas='indexSwiper'></banner>
    </div>
</template>
<script>
import Banner from '@/components/banner'
export default {
    data(){
        return{
            indexSwiper:[]
        }
    },
    components:{
        Banner
    },
    mounted(){
        this.$axios.get('https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/')
        .then((res)=>{
            console.log(res.data.data.banner);
            this.indexSwiper=res.data.data.banner
        }).catch((error)=>{
            alert(error)
        })
    }
}
</script>
<style lang='scss'>
.index-banner{
    height: 3.2rem;background-color: #e8e8e8;padding:.2rem;
}
.index-banner{
    .mint-swipe-item{
        height:100%
    }
}
</style>
