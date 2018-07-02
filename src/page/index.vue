<template>
    <div>
        <set-title>首页--为您推荐</set-title>
        <banner class="index-banner" :swiperDatas='indexSwiper'></banner>
        <div class="recommand">
            <h2 class="title">echo每日推荐</h2>
            <div class="lists">
                <div class="lists-time">12分钟前推荐</div>
                <recommand-list :listsData='lists' v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"></recommand-list>
  
                <mt-spinner type="triple-bounce" color="#7DD97F" v-show='loading'></mt-spinner>
            </div>
        </div>
    </div>
</template>
<script>
import Banner from "@/components/banner";
import RecommandList from "@/components/recommand-list";
export default {
  data() {
    return {
      indexSwiper: [],
      lists: [
        // {
        //     img:'https://al-qn-echo-image-cdn.app-echo.com/FqL7xUo5Rej8mj7Dy-Ivpy7sl94K?imageMogr2/auto-orient/quality/100%7CimageMogr2/thumbnail/!500x500r/gravity/Center/crop/500x500/dx/0/dy/0',
        //     detailId:'010',
        //     tagColor:'tag_blue',
        //     title:'A$AP Ferg 来听低音饶舌爽一下吧 Swipe Life',
        //     channel:{
        //         id:'c01',
        //         txt:'Hip Hop街区'
        //     }
        // }
      ],
      page: 0,
      loading:false
    };
  },
  components: {
    Banner,
    RecommandList
  },
  mounted() {
    this.$axios
      .get("https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/")
      .then(res => {
        console.log(res.data.data.banner);
        this.indexSwiper = res.data.data.banner;
      })
      .catch(error => {
        alert(error);
      });

    var pagesize = 10;
    this.$axios.post(
        "https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/reclists",
        {
          page: this.page
        }
      )
      .then(res => {
        console.log(res);
        this.lists = res.data.lists;
        this.page++;
      })
      .catch(error => {
        alert(error);
      });
  },
  methods: {
    loadMore() {
      console.log(this.page, this.loading);
      this.loading = true;
      this.$axios.post(
          "https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/reclists",
          {
            page: this.page
          }
        )
        .then(res => {
          res.data.lists.forEach((val)=>{
            this.lists.push(val);
          });
          this.page++;
          this.loading=false;
        })
        .catch(error => {
          alert(error);
          this.loading=false;
        });
    }
  }
};
</script>
<style lang='scss' scoped>
.index-banner {
  height: 3.2rem;
  background-color: #e8e8e8;
  padding: 0.2rem;
}
.index-banner {
  .mint-swipe-item {
    height: 100%;
  }
}
.recommand {
  padding: 0 0.2rem;
  text-align: center;
  h2.title {
    display: inline-block;
    padding: 0.02rem 0.4rem;
    font-size: 0.24rem;
    background-color: #d6ffd6;
    color: #639e5e;
    border-radius: 0.5rem;
    margin: 0.45rem 0;
  }
  .lists {
    position: relative;
    .lists-time {
      width: 2.34rem;
      height: 0.52rem;
      line-height: 0.52rem;
      position: absolute;
      top: 0.23rem;
      left: -0.2rem;
      background-image: url("http://www.app-echo.com/images/echo_mobile_sprites@3_8.png");
      background-repeat: no-repeat;
      background-position: -131px -334px;
      background-size: 400px;
      z-index: 1;
      color: #fff;
      font-size: 0.2rem;
      text-align: left;
      padding-left: 0.2rem;
    }
  }
}
</style>
