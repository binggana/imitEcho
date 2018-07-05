let numConvert = (val) => {
    if (val) {
        let sLength = val.length;
        if (sLength >= 5) {//12345(万位)
            return (val / 10000).toFixed(2) + '万';
        }else{
            return val;
        }
    }
}

export default {
    numConvert
}