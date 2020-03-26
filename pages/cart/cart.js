import {CART_LIST} from "../../utils/storageKey";
const computedBehavior = require('miniprogram-computed');

Page({
  behaviors: [computedBehavior],
  data: {
    cartList: [],
    totalPrice: 0,
  },
  computed:{

  },
  onLoad: function (options) {
    this.dataGetCartList();
    this.getTotalPrice();
  },
  dataGetCartList() {
    const cartList = wx.getStorageSync(CART_LIST);
    this.setData({cartList});
    const allNum = cartList.reduce((total, value) => total + value.my_qty, 0);
    wx.setNavigationBarTitle(({title: '购物车（' + allNum + '件)'}))
  },
  getTotalPrice(){
    const totalPrice = this.data.cartList
      .filter(value => value.my_checked)
      .reduce((total,item) => total + item.discountPrice * item.my_qty, 0)
      .toFixed(2);
    this.setData({totalPrice})
  },
  checkBoxClick(v){
    // 购物车列表复选框点击后更新购物车列表数据
    const cartList = this.data.cartList;
    cartList[v.detail.index].my_checked = v.detail.checked;
    this.setData({cartList});
    // 更新总价
    this.getTotalPrice();
    // 购物车列表复选框点击后改变全选按钮状态
    const allChecked = this.selectComponent("#submit");
    const checked = this.data.cartList.find(value => value.my_checked === false);
    if (checked){
      allChecked.setData({checked: false});
    }else {
      allChecked.setData({checked: true});
    }
  },
  // 全选按钮点击后更新列表组复选框状态
  allCheckedClick(v){
    const status = v.detail.status;
    const cartList = this.data.cartList;
    cartList.map(value => value.my_checked = status);
    this.setData({cartList});
    // 更新总价
    this.getTotalPrice();
  }
});
