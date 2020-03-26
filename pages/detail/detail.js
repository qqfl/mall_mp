import {getDetailData} from "../../utils/getData/detail";
import {CART_LIST} from "../../utils/storageKey";
import Toast from '@vant/weapp/toast/toast';

Page({
  data: {
    bannerImg: [],
    detail: {},
    goodsNum: 0
  },
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('setPageData', res => {
      this.dataGetDetail(res.id);
    });
    this.dataGetGoodsNum();
  },
  dataGetDetail(id) {
    getDetailData(id).then(value => {
      this.setData({detail: value.data.info});
      const arr = [];
      value.data.info.img.map(value1 => {
        arr.push({image: value1})
      });
      this.setData({bannerImg: arr});
    })
  },
  dataGetGoodsNum() {
    const num = wx.getStorageSync(CART_LIST).length;
    this.setData({goodsNum: num});
  },
  openColorSize() {
    this.selectComponent('#colorSize').showPopup();
  },
  // 添加购物车
  addCart(options) {
    const ci = options.detail.ci;
    const si = options.detail.si;
    const qty = options.detail.qty;
    const id = this.data.detail.id + '-' + ci + '-' + si;
    // 构建新数据，添加购物车需要展示的数据，此处使用对象的解构赋值深拷贝一层数据
    const newDetail = {...this.data.detail};
    newDetail.id = id;
    newDetail.my_ci = ci;
    newDetail.my_si = si;
    newDetail.my_qty = qty;
    newDetail.my_checked = true;
    let cartList = wx.getStorageSync(CART_LIST);
    if (cartList) {
      // 判断如果购物车有此商品，则数量增加，否则添加新商品
      const index = cartList.findIndex(value => value.id === id);
      if (index >= 0) {
        cartList[index].my_qty += qty;
      } else {
        cartList.push(newDetail);
      }
    } else {
      cartList = [newDetail];
    }
    wx.setStorageSync(CART_LIST, cartList);
    this.dataGetGoodsNum();
    Toast.success('添加成功');
  }
});
