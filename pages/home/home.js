import {
  getMutiData,
  getFeatureData,
  getTabData
} from "../../utils/getData/home";

Page({
  data: {
    banners: [],
    recommends: [],
    features: [],
    tabType: 'pop',
    tabData: {
      pop: {page: 1, list: []},
      new: {page: 1, list: []},
      sell: {page: 1, list: []},
    },
  },
  onLoad: function (options) {
    this.dataGetMD();
    this.dataGetFD();
    this.dataGetTD('pop');
    this.dataGetTD('new');
    this.dataGetTD('sell');
  },
  dataGetMD(){
    getMutiData()
      .then(value => {
        const banners = value.data.banner.list;
        const recommends = value.data.recommend.list;
        this.setData({banners, recommends});
      })
      .catch(reason => console.log(reason));
  },
  dataGetFD(){
    getFeatureData()
      .then(value => {
        const features = value.data.list;
        this.setData({features});
      })
      .catch(reason => console.log(reason));
  },
  dataGetTD(type){
      getTabData({type, page: this.data.tabData[type].page})
        .then(value => {
          const list = value.data.list;
          const page = value.data.page;
          const oldList = this.data.tabData[type].list;
          oldList.push(...list);
          this.setData({
            [`tabData.${type}.list`]: oldList,
            [`tabData.${type}.page`]: page + 1
          })
        })
        .catch(reason => console.log(reason));
  },
  setTabActive(e) {
    this.setData({tabType: e.detail.type});
  },
  onReachBottom() {
    const type = this.data.tabType;
    this.dataGetTD(type);
  },
  onPageScroll(options) {
    // console.log(options.scrollTop)
    const dd = this.querySelector('')
  }
});
