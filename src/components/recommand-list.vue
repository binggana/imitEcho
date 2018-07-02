<template>
   <div>
       <ul class="lists clearfix">
           <li v-for='(item,i) in listsData' :key='i'>
               <router-link :to="'/detail/'+item.detailId">
               <div class="thumbnailW">
                   <img v-lazy="item.img">
               </div>
               <!-- hot标签 -->
               <div class="tags-box" v-if='item.tagColor'>
                   <span class="tag" :class="item.tagColor"></span>
               </div>
               <!-- 收藏标签 -->
               <div class="collection-box" v-if='item.collection'>
                   <span class='collection'></span>
               </div>
               </router-link>
               <!-- 列表标题和文字 -->
               <div class="playlist-txt">
                   <p class="txt-over-hidden">{{item.title}}</p>
                   <div class="channel-box" v-if='item.channel'>
                       <router-link :to="'/channel/'+item.channel.id" class="txt-over-hidden">{{item.channel.txt}}</router-link>
                       <span class="txt-sm-grey">频道</span>
                   </div>
               </div>
           </li>
       </ul>
   </div> 
</template>
<script>
export default {
    name:'RecommandList',
    props:['listsData']
}
</script>
<style lang="scss" scoped>
    .lists{
        margin-left: -4%;
        li{
            width:46%;float:left;
            margin-left:4%;
            margin-bottom: .2rem;
            position: relative;
            .thumbnailW{
                width:100%;
                min-height:1rem;
            }
            .tags-box{
                position: absolute;
                top:.3rem;
                right:.3rem;
                width: .5rem;
                height: .5rem;
                //background-color: #fff;
                border-radius: 50%;
                .tag{
                    display: block;
                    background-image: url('http://www.app-echo.com/images/echo_mobile_sprites@3_8.png');
                    background-repeat: no-repeat;height: 100%;
                    background-size: 320px;margin: 0 auto
                }
            }
            .playlist-txt{
                padding: .12rem 0;
                text-align: left;
                .channel-box{
                    display: flex;
                    justify-content: space-between;
                    a{color: #7DD97F}
                    span{flex-shrink: 0}
                }
            }
        }
    }
</style>
