<template>
    <div>
        <mt-swipe :auto="5000" :show-indicators='swiperDatas.length>1'>
            <mt-swipe-item v-for='(item,i) in swiperDatas' :key=i>
                <img :src="item.url" alt="item.alt">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    name:'banner',
    props:['swiperDatas'],
    // data(){
    //     return{
    //         swiperDatas:[
    //             {
    //                 url:'https://al-qn-echo-image-cdn.app-echo.com/FpEuAAW1hzrRFzjjseWQn8SC8NL2.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100',
    //                 alt:''
    //             }
    //         ]
    //     }
    // }
}
</script>
<style lang='scss'>
    .mint-swipe,.mint-swipe-items-wrap{
        height:100%;
    }
    .mint-swipe-item{
      img{
          display:block;width: 100%
      }  
    }
    .mint-swipe-indicator.is-active{opacity: .5;}
    .slide1{
        background-color: #000
    }
    .slide2{
        background-color: rgb(18, 138, 194)
    }
    .slide3{
        background-color: rgb(10, 214, 129)
    }
</style>
