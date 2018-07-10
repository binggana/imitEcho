<template>
    <div>
        <set-title v-if='mtitle'>{{mtitle}}</set-title>
        <!-- up主信息 -->
        <div class="top">
            <div class="userinfo">
              <div class="avatar-box">
                <div class="avatar"><img :src="audio.data.user.avatar_50" :alt="audio.data.user.name"></div>
                <div class="famous-tag" v-if="userData.famous_icon">
                  <img :src="userData.famous_icon">
                </div>
              </div>
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
          <div class="progress" @touchstart.stop="beat">
            <em>{{audio.curTime |numToClock}} / {{audio.duration|numToClock}}</em>
            <span :style="{width:playProgress+'%'}"></span>
          </div>
          <div class="audioinfo-box">
              <div class="play-status" :class="{pause:isPause}" @click="setAudioStatus(isPause)"></div>
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
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      mtitle: null,
      userData: {},
      detailData: {},
      danmuOn: true
    };
  },
  computed: {
    ...mapState(["audio", "playList", "playMode"]),
    ...mapGetters(["playProgress", "audioPlayStatus"]),
    isPause() {
      return !this.audio.playStatus;
    }
  },
  created() {
    this.getDatas();
  },
  methods: {
    toggleDanmu() {
      this.danmuOn = !this.danmuOn;
    },
    getDatas() {
      let detailid = this.$route.params.id;
      //console.log(detailid);
      this.$axios
        .get(
          "https://www.easy-mock.com/mock/5b34aeb8e1815c19167faa21/imitecho/echoindex"
        )
        .then(res => {
          /*开发环境数据 */
          //console.log('原始id:'+detailid);
          detailid = detailid > 5 ? detailid % 5 : detailid;
          //console.log('处理id:'+detailid);
          let detailInfo = res.data.data[detailid].sound;
          /*开发环境数据 */

          this.detailData = detailInfo;
          this.userData = detailInfo.user;

          this.setAudioData(detailInfo);
          this.setPlaylist(detailInfo);
          console.log(detailInfo);
          console.log(this.userData);
          this.mtitle = detailInfo.name;
        })
        .catch(error => {
          console.log(error);
        });
    },

    ...mapMutations([
      "setAudioData",
      "setAudioStatus",
      "setPlaylist"
    ]),

    //触摸进度条
    beat(e) {
      console.log(e.changedTouches[0].pageX, window.innerWidth);
      let progress = (e.changedTouches[0].pageX / window.innerWidth).toFixed(2);
      this.audio.ele.currentTime = progress * this.audio.duration;
      //console.log(progress,progress*this.audio.duration);
    }
  }
  // watch:{
  //    $route(to, from) {
  //           if (this.$route.path.includes('detail')) {
  //               this.getDatas()
  //           }
  //       }
  // }
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
  .avatar-box {
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 0.2rem;
    position: relative;
    .avatar {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .famous-tag {
      width: 0.28rem;
      height: 0.28rem;
      position: absolute;
      right: 0;
      bottom: 0;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
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
        margin-left: 0.2rem;
        position: relative;
        z-index: 99;
      }
      span {
        position: absolute;
        min-width: 0.09rem;
        // width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(76, 245, 73, 0.34);
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
      padding: 0 0.2rem;
      display: flex;
      align-items: center;
      color: #fff;
      .play-status {
        width: 0.7rem;
        height: 0.7rem;
        margin-right: 0.2rem;
        background: url("~@/assets/images/play.png") no-repeat center center;
        background-size: cover;
        &.pause {
          background: url("~@/assets/images/pause.png") no-repeat;
          background-size: cover;
        }
      }
      .audioname {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .up-info {
          display: block;
          font-size: 0.24rem;
          margin-top: 0.05rem;
          a {
            padding: 0 0.2rem;
          }
        }
      }
      .danmu-switch {
        width: 1.1rem;
        height: 0.5rem;
        border-radius: 0.4rem;
        line-height: 0.5rem;
        text-align: center;
        flex-shrink: 0;
        position: absolute;
        right: 0.2rem;
        background-color: #666666;
        .switch-status {
          width: 0.89rem;
          border-radius: 0.4rem;
          background-color: #aab2aa;
          position: absolute;
          left: 0;
          transition: 0.3s ease;
          &.on {
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

