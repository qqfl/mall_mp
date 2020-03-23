import {getDetailData} from "../../utils/getData/detail";

Page({
  data: {
    bannerImg:[],
    detail:{},
  },
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('setPageData', res => {
      this.dataGetDetail(res.id);
    })
  },
  dataGetDetail(id){
    getDetailData(id).then(value => {
      this.setData({detail: value.data.info});
      const arr = [];
      value.data.info.img.map(value1 => {
        arr.push({image: value1})
      });
      this.setData({bannerImg: arr});
    })
  }
});
