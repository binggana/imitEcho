let numConvert = (val) => {
    if (val) {
        let sLength = val.length;
        if (sLength >= 5) {//12345(万位)
            return (val / 10000).toFixed(2) + '万';
        }else{
            return val;
        }
    }
};

let numToClock=(val)=>{
    if(val>=1){
        let intSec=Math.round(val);//对总秒数取整
        let minutes=~~(val/60);//分
        let sec=intSec % 60;//秒
        //显示时间格式整理
        minutes=minutes>10?minutes:"0"+minutes;
        sec=sec>10?sec:"0"+sec;
        return minutes+":"+sec;
    }else{
        return "00:00";
    }

};

export default {
    numConvert,
    numToClock
}