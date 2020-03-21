import {
  getMutiData,
  getFeatureData
} from "../../utils/getData/home";

Page({
  data: {
    banners: [],
    recommends: [],
    features: [],
  },
  onLoad: function (options) {
    getMutiData()
      .then(value => {
        const banners = value.data.banner.list;
        const recommends = value.data.recommend.list;
        this.setData({banners, recommends});
      })
      .catch(reason => console.log(reason));
    getFeatureData()
      .then(value => {
        const features = value.data.list;
        this.setData({features});
      })
      .catch(reason => console.log(reason))
  }
});
