<template>
<div>
    <div class="music-bar">
        <div class="thumbnailH">
            <img :src="audio.data.pic_100" alt="audio.data.name">
        </div>
        <div class="audio-txt">
            <p class="txt-over-hidden">{{audio.data.name}}fsdfsfsfsaf打算打打法法</p>
            <span class="txt-over-hidden">{{audio.data.user.name}}</span>
        </div>
        <div class="contorls">
            <div class="lists" @click='toggleList'>
                <i class="icon icon-list"></i>
            </div>
            <div class="play" @click='togglePlay'>
                <i class="icon" :class="iconplay"></i>
                </div>
            <div class="next">
                <i class="icon icon-next"></i>
            </div>
        </div>
    </div>
    
        <!-- 播放列表 -->
        <mt-actionsheet class="play-list" :actions="actions" v-model="sheetVisible" cancelText=""></mt-actionsheet>
        </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "musicbar",
  computed: {
    ...mapState(["audio"])
  },
  data() {
    return {
      iconplay: "icon-pause",
      actions: [{ name: "选项一" }, { name: "选项二" }],
      sheetVisible: false
    };
  },
  methods: {
    togglePlay() {
      this.iconplay =
        this.iconplay == "icon-pause" ? "icon-play" : "icon-pause";
    },
    toggleList() {
      this.sheetVisible = !this.sheetVisible;
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
    bottom: 0.96rem;
    z-index: 1;
    font-size: .28rem;
  }
</style>
