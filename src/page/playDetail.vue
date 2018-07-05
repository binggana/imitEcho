<template>
    <div>
        <set-title v-if='mtitle'>{{mtitle}}</set-title>
        <!-- up主信息 -->
        <div class="top">
            <div class="userinfo">
              <span class="avatar">
                <img :src="audio.data.user.avatar_50" alt="">
              </span>
              <span class="txt-over-hidden">{{audio.data.user.name}}</span>
            </div>
            <div class="fans">粉丝：{{audio.data.user.followed_count |numConvert}}</div>
        </div>
        <div class="cover">
        <!-- 歌曲封面 -->
          <div class="thumbnailW">
            <img :src="audio.data.pic_500">
          </div>
        <!-- 歌曲信息 -->
        <div class="audioinfo">
          <!-- 播放进度 -->
          <div class="progress">
            <em>12.23253525</em>
            <span></span>
          </div>
          <div class="audioinfo-box">
              <div class="play-status" :class="{play:isPlay}"></div>
              <div class="audioname">
                <span>{{audio.data.name}}</span>
                <span class="up-info"><router-link to='/'>{{audio.data.user.name}}</router-link>发布在<router-link to='/'>{{audio.data.channel.name}}</router-link></span>
              </div>
              <div class="danmu-switch" @click.stop='toggleDanmu'>
                <div class="switch-status" :class="{on:danmuOn}">弹幕</div>
              </div>
          </div>
        </div>
        </div>
        歌单详情页--id{{$route.params.id}}
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      mtitle: null,
      userData: {},
      detailData: {},
      isPlay: true,
      danmuOn:true
    };
  },
  computed:{    
    ...mapState(['audio','playList','playMode']),
  },
  mounted() {
    let detailid = this.$route.params.id;
    //console.log(detailid);
    this.$axios
      .get(
        "https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/echoindex"
      )
      .then(res => {
        let detailInfo = res.data.data[detailid].sound;
        this.detailData = detailInfo;
        this.userData = detailInfo.user;

        this.setAudioData(detailInfo);
        console.log(detailInfo);
        console.log(this.userData);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods:{
    toggleDanmu(){
      this.danmuOn=!this.danmuOn;
    },
    
    ...mapMutations(['setAudioData','setAudioStatus','setAudioDuration','setAudioCurtime','setPlaylist']),
  }
};
</script>
<style lang="scss" scoped>
.top {
  height: 1.1rem;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  overflow: hidden;
  .fans {
    flex-shrink: 0;
  }
}
.userinfo {
  display: flex;
  align-items: center;
  width: 66%;
  .avatar {
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 0.2rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  span {
    width: 100%;
  }
}
.cover {
  position: relative;
  min-height: 7.5rem;
  .audioinfo {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    .progress {
      height: 0.28rem;
      line-height: 0.28rem;
      position: relative;
      background-color: rgba(0, 0, 0, 0.2);
      em {
        font-style: normal;
        font-size: 0.2rem;
        color: #fff;
        margin-left: .2rem;
      }
      span {
        position: absolute;
        min-width: 0.09rem;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(110, 213, 108, 0.2);
        &:after {
          position: absolute;
          content: "";
          width: 0.09rem;
          height: 100%;
          background-color: #6ed56c;
          right: 0;
          top: 0;
        }
      }
    }
    .audioinfo-box {
      width: 100%;
      height: 1.1rem;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 0 .2rem;
      display: flex;
      align-items: center;
      color:#fff;
      .play-status {
        width: .7rem;height: .7rem;
        margin-right: .2rem;
        background: url('~@/assets/images/pause.png') no-repeat center center;
        background-size: cover;
      }
      .audioname{
        display: flex;
        flex-direction: column;
        justify-content:center;
        .up-info{
          display: block;
          font-size: .24rem;
          margin-top: .05rem;
          a{
            padding: 0 .2rem
          }
        }
      }
      .danmu-switch{
        width: 1.1rem;height: .5rem;border-radius: .4rem;line-height: .5rem;text-align: center;
        flex-shrink: 0;position: absolute;right: .2rem;
        background-color: #666666;
        .switch-status{
          width: .89rem;border-radius: .4rem;
          background-color: #aab2aa;
          position: absolute;left: 0;
          transition: .3s ease;
          &.on{
            background-color: #6be659;
            left: auto;
            right: 0;
          }
        }
      }
    }
  }
}
</style>

