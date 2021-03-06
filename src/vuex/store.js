import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    audio: {
        ele:null,
        data: null,
        playStatus: false,//播放状态-----[true]表示播放状态,
        duration: 0,//当前歌曲总时长
        curTime: 0,//播放时间

    },
    playMode: 'default',//播放模式
    playList: [],//播放列表
};

const mutations = {
    //获取音乐播放元素
    setAudioEle(state,val){
        state.audio.ele=val;
    },
    //设置音乐数据
    setAudioData(state, val) {
        state.audio.data = val;
    },
    //设置播放状态
    setAudioStatus(state, val) {
        state.audio.playStatus = val;
    },
    //设置当前歌曲总时长
    setAudioDuration(state, val) {
        state.audio.duration = val;
    },
    //设置当前播放时间
    setAudioCurtime(state, val) {
        state.audio.curTime = val;
    },
    //设置当前播放列表
    setPlaylist(state, val) {
        let result=state.playList.find((item)=>{
            return item.channel_id==val.channel_id;
        });
        //console.log(result,result!=undefined);
        //id不同的音乐加入播放列表
        if (result==undefined){
            state.playList.unshift(val);
        }
    }

}

const getters = {
    //返回audios元数据，方便侦听数据变化
    audioData(state){
        return state.audio.data;
    },
    //返回audio播放状态
    audioPlayStatus(state){
        return state.audio.playStatus;
    },
    //返回播放进度
    playProgress(state) {
        return ((state.audio.curTime/state.audio.duration)*100).toFixed(2);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    //actions
})