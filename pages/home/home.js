import {getMutiData} from "../../utils/getData/home";

Page({
  data: {
    banner: [],
    recommend: [],
  },
  onLoad: function (options) {
    getMutiData()
      .then(value => {
        const banner = value.data.banner.list;
        const recommend = value.data.recommend.list;
        this.setData({banner,recommend})
      })
      .catch(reason => console.log(reason))
  }
});
