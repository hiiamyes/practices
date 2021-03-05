// const axios = require("axios");

const listWeathers = async () => {
    try {
        // const { data } = await axios.request({
        //     url: "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0035-015",
        //     params: {
        //         Authorization: process.env.CWB_API_TOKEN,
        //         format: "json"
        //     }
        // });
        // const { uri } = data.cwbopendata.dataset.resource;
        // console.log(uri);        
        // return uri;
        return [
            `https://www.cwb.gov.tw/Data/fcst_img/QPF_ChFcstPrecip_6_06.png?ts=${new Date().getTime()}`,
            `https://www.cwb.gov.tw/Data/fcst_img/QPF_ChFcstPrecip_6_12.png?ts=${new Date().getTime()}`,
            `https://www.cwb.gov.tw/Data/fcst_img/QPF_ChFcstPrecip_6_18.png?ts=${new Date().getTime()}`,
            `https://www.cwb.gov.tw/Data/fcst_img/QPF_ChFcstPrecip_6_24.png?ts=${new Date().getTime()}`,
        ]
    } catch (err) {
        console.log(err);
    }
};

module.exports = listWeathers;
