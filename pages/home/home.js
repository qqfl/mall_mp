import {
  getMutiData,
  getFeatureData,
  getTabData
} from "../../utils/getData/home";

const TOP_DISTANCE = 1000;

Page({
  data: {
    banners: [],
    recommends: [],
    features: [],
    tabs: ['pop','new','sell'],
    tabsCH: ['流行','新款','精选'],
    tabType: 'pop',
    tabData: {
      pop: {page: 1, list: []},
      new: {page: 1, list: []},
      sell: {page: 1, list: []},
    },
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0,
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
  // 下来加载更多
  onReachBottom() {
    this.dataGetTD(this.data.tabType);
  },
  // 两层tabControl点击同步
  myTabClick(e){
    const aa1 = this.selectComponent('#myTabControl1');
    const aa2 = this.selectComponent('#myTabControl2');
    aa1.setData({active:e.detail});
    aa2.setData({active:e.detail});
    this.setData({tabType: this.data.tabs[e.detail]});
  },
  // 监听页面滚动
  onPageScroll(options) {
    // 返回顶部
    const flag = options.scrollTop >= TOP_DISTANCE;   // 不要频繁setData，提高性能
    if (flag !== this.data.showBackTop){
      this.setData({showBackTop: flag})
    }
    // 固定tabControl
    const flag2 = options.scrollTop >= this.data.tabScrollTop;    // 不要频繁setData，提高性能
    if (flag2 !== this.data.isTabFixed){
      this.setData({isTabFixed: flag2})
    }
  },
  // 获取tabControl距离顶部高度
  imgLoadOver(){
    this.createSelectorQuery().select('#myTabControl2').boundingClientRect(result => {
      if (this.data.tabScrollTop !== result.top){
        this.setData({tabScrollTop: result.top});
      }
    }).exec()
  }
});
