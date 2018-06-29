<template>
    <div>
        <banner class="index-banner" :swiperDatas='indexSwiper'></banner>
        <div class="recommand">
            <h2 class="title">echo每日推荐</h2>
            <div class="lists">
                <div class="lists-time">12分钟前推荐</div>
                <recommand-list :listsData='lists'></recommand-list>
            </div>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/banner'
import RecommandList from '@/components/recommand-list'
export default {
    data(){
        return{
            indexSwiper:[],
            lists:[
                {
                    img:'https://al-qn-echo-image-cdn.app-echo.com/FqL7xUo5Rej8mj7Dy-Ivpy7sl94K?imageMogr2/auto-orient/quality/100%7CimageMogr2/thumbnail/!500x500r/gravity/Center/crop/500x500/dx/0/dy/0',
                    detailId:'010',
                    tagColor:'tag_blue',
                    title:'A$AP Ferg 来听低音饶舌爽一下吧 Swipe Life'
                },
                {
                    img:'https://qn-qn-echo-image-cdn.app-echo.com/FmaSczxYpcBfaV6oMemCTIqV4o6L?imageMogr2/auto-orient/quality/100%7CimageMogr2/thumbnail/!500x500r/gravity/Center/crop/500x500/dx/0/dy/0',
                    detailId:'010'
                }
            ]
        }
    },
    components:{
        Banner,
        RecommandList
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
<style lang='scss' scoped>
.index-banner{
    height: 3.2rem;background-color: #e8e8e8;padding:.2rem;
}
.index-banner{
    .mint-swipe-item{
        height:100%
    }
}
.recommand{
    padding: 0 .2rem;
    text-align:center;
    h2.title{display: inline-block;padding:.02rem .4rem;font-size: .24rem;background-color: #d6ffd6;color:#639E5E;border-radius: .5rem;margin: .45rem 0}
    .lists{
        position: relative;
        .lists-time{
            width: 2.34rem;
            height: .52rem;
            line-height: .52rem;
            position: absolute;
            top:.23rem;
            left:-.2rem;
            background-image: url('http://www.app-echo.com/images/echo_mobile_sprites@3_8.png');
            background-repeat: no-repeat;
            background-position: -131px -334px;
            background-size: 400px;
            z-index: 1;
            color:#fff;
            font-size: .2rem;
            text-align: left;
            padding-left: .2rem;
        }
    }
 }
</style>
