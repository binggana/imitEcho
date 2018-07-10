<template>
<div>
    <div class="music-bar">
        <router-link class="thumbnailH" :to="'/detail/'+audio.data.channel_id">
            <img :src="audio.data.pic_100" alt="audio.data.name">
        </router-link>
        <div class="audio-txt">
            <p class="txt-over-hidden">{{audio.data.name}}</p>
            <span class="txt-over-hidden">{{audio.data.user.name}}</span>
        </div>
        <div class="contorls">
            <div class="lists" @click='toggleList'>
                <i class="icon icon-list"></i>
            </div>
            <div class="play" @click='setAudioStatus(!audio.playStatus)'>
                <i class="icon" :class="iconplay"></i>
                </div>
            <div class="next">
                <i class="icon icon-next"></i>
            </div>
        </div>
        <!-- 音乐播放-->
        <audio ref='music' :src="audio.data.source" autoplay></audio>

    </div>
    
        <!-- 播放列表 -->
        <mt-popup v-model="popupVisible" position="bottom" :modal="false" class="play-list">
          <p class="title">播放列表<span>({{playList.length}})首</span></p>
          <ul class="lists-box">
            <li v-for='(item,index) in playList' :key="index" :class="[item.channel_id==audio.data.channel_id?'active':'']">{{item.name}}</li>
          </ul>
        </mt-popup>
</div>
</template>
<script>
import { mapState,mapGetters, mapMutations } from "vuex";
export default {
  name: "musicbar",
  computed: {
    ...mapState(["audio", "playList", "playMode"]),
    ...mapGetters(['audioData','audioPlayStatus']),
    iconplay(){
      //console.log(this.audio.playStatus);
      return this.audio.playStatus?"icon-pause" : "icon-play";
    }
  },
  data() {
    return {
      //iconplay: "icon-pause",
      popupVisible: false
    };
  },
  // updated(){
  //   this.audioInit();
  // },
  watch:{
    //侦听audio元数据是否发生变化，变化后重载audio
    audioData(val){
      if(val){
        this.$nextTick(()=>{
          this.audioInit();
        })
      }
    },
    //侦听播放状态变化
    audioPlayStatus(val){
      val?(this.audio.ele.play()):(this.audio.ele.pause());
    }
  },
  methods: {
    ...mapMutations([
      "setAudioEle",
      "setAudioStatus",
      "setAudioDuration",
      "setAudioCurtime"
    ]),
    //audio相关操作
    audioInit(){
      let audioEle=this.$refs.music;
      this.setAudioEle(audioEle);

      //当audio可以播放时触发canplay
      audioEle.oncanplay=()=>{
        audioEle.play();
        //console.log("当前歌曲总时长(秒)："+audioEle.duration);
        this.setAudioDuration(audioEle.duration);
      };

      //audio播放位置发生改变时触发timeupdate
      audioEle.ontimeupdate=()=>{
        let curTime=audioEle.currentTime;
        //console.log("当前播放时间"+curTime);
        this.setAudioCurtime(curTime);
      };
      /*状态*/
      audioEle.onplay=()=>{
        this.setAudioStatus(true);
      };
      audioEle.onpause=()=>{
        this.setAudioStatus(false);
      };
      audioEle.onended=()=>{
        this.setAudioStatus(false);
      };

    },
    toggleList() {
      this.popupVisible = !this.popupVisible;
      console.log(this.$refs.music.duration);
    }
  }
};
</script>
<style lang="scss" scoped>
.music-bar {
  width: 100%;
  display: flex;
  height: 0.96rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-top: 1px solid #e8e8e8;
  position: fixed;
  bottom: 0;
  align-items: center;
  padding: 0.1rem 0.2rem;
  z-index: 9999;
  .thumbnailH {
    height: 90%;
    margin-right: 0.2rem;
  }
  .audio-txt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    overflow: hidden;
    font-size: 0.28rem;
    span {
      font-size: 0.24rem;
    }
  }
  .contorls {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    div {
      width: 0.64rem;
      height: 0.64rem;
      border: 1px solid #515151;
      border-radius: 50%;
      margin-left: 0.2rem;
      display: flex;
      align-items: center;
    }
    i.icon {
      display: block;
      width: 60%;
      height: 50%;
      margin: 0 auto;
      &.icon-list {
        background: url("~@/assets/images/playlists.png") no-repeat center
          center;
        background-size: auto 100%;
      }
      &.icon-play {
        background: url("~@/assets/images/musicplay.png") no-repeat center
          center;
        background-size: auto 100%;
      }
      &.icon-pause {
        background: url("~@/assets/images/musicpause.png") no-repeat center
          center;
        background-size: auto 100%;
      }
      &.icon-next {
        background: url("~@/assets/images/musicnext.png") no-repeat center
          center;
        background-size: auto 100%;
      }
    }
  }
}

.play-list {
  width: 100%;
  bottom: 0.96rem;
  z-index: 1;
  font-size: 0.28rem;
  border-top: 1px solid #e8e8e8;
  padding-top: 0.2rem;
  p.title {
    color: #6ed56c;
    text-align: center;
    font-size: 0.28rem;
    margin-bottom: 0.25rem;
    span {
      font-size: 0.24rem;
      padding-left: 0.1rem;
    }
  }
  .lists-box {
    height: 2rem;
    overflow-y: scroll;
    li {
      padding: 0.2rem;
      font-size: 0.24rem;
      color: #909090;
      &:not(:last-of-type) {
        border-bottom: 1px solid #f3f3f3;
      }
      &.active{
        color:#6ed56c;
      }
    }
  }
}
</style>
