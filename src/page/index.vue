<template>
    <div>
        <banner class="index-banner" :swiperDatas='indexSwiper'></banner>

        <mt-button type="default">default</mt-button>
    </div>
</template>
<script>
import Banner from '@/components/banner'
export default {
    data(){
        return{
            indexSwiper:[
                {
                    url:'https://al-qn-echo-image-cdn.app-echo.com/FpEuAAW1hzrRFzjjseWQn8SC8NL2.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100',
                    alt:''
                },
                {
                    url:'https://al-qn-echo-image-cdn.app-echo.com/FpEuAAW1hzrRFzjjseWQn8SC8NL2.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100',
                    alt:''
                }
            ]
        }
    },
    components:{
        Banner
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
