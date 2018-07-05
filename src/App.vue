<template>
  <div id="app" :class="{open:isOpen}">
    <set-title>echo回声 | 潮流音乐生活方式-3D音乐 弹幕社交 趣味铃声 变声录音 KTV</set-title>
    <transition name='fade' mode='out-in'>
      <router-view/>
    </transition>
    <music-bar></music-bar>
  </div>
</template>

<script>
import MusicBar from "@/components/musicBar";
export default {
  name: "App",
  data() {
    return {
      isOpen: true
    };
  },
  components: {
    MusicBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
}
.open {
  padding-bottom: 0.96rem;
}
.fade-enter {
  transform: translateX(50%);
  opacity: 0;
}
.fade-leave-active {
  transform: translateX(-50%);
  opacity: 0;
}
.fade-enter-active,
.fade-leave {
  transform: translateX(0);
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}

.mint-actionsheet-listitem {
  font-size: 0.28rem;
}
</style>
