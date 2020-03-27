import {CART_LIST} from "../../utils/storageKey";
const computedBehavior = require('miniprogram-computed');

Page({
  behaviors: [computedBehavior],
  data: {
    cartList: [],
  },
  computed: {
    totalPrice(data) {
      // 注意： computed 函数中不能访问 this ，只有 data 对象可供访问
      // 这个函数的返回值会被设置到 this.data.sum 字段中
      return data.cartList
        .filter(value => value.my_checked)
        .reduce((total,item) => total + item.discountPrice * item.my_qty, 0)
        .toFixed(2);
    },
  },
  onLoad: function (options) {
  },
  onShow() {
    this.dataGetCartList();
  },
  // 获取购物车数据
  dataGetCartList() {
    const cartList = wx.getStorageSync(CART_LIST);
    this.setData({cartList});
    const allNum = cartList.reduce((total, value) => total + value.my_qty, 0);
    if (allNum > 0){
      wx.setNavigationBarTitle(({title: '购物车（' + allNum + '件)'}))
    }else {
      wx.setNavigationBarTitle(({title: '购物车'}))
    }
  },
  // 购物车列表前复选框点击事件
  checkBoxClick(v){
    // 购物车列表复选框点击后更新购物车列表数据
    const cartList = this.data.cartList;
    cartList[v.detail.index].my_checked = v.detail.checked;
    this.setData({cartList});
    // 购物车列表复选框点击后改变全选按钮状态
    const allChecked = this.selectComponent("#submit");
    const checked = this.data.cartList.find(value => value.my_checked === false);
    if (checked){
      allChecked.setData({checked: false});
    }else {
      allChecked.setData({checked: true});
    }
  },
  // 结算前全选按钮点击后更新列表组复选框状态
  allCheckedClick(v){
    const status = v.detail.status;
    const cartList = this.data.cartList;
    cartList.map(value => value.my_checked = status);
    this.setData({cartList});
  },
  // 购物车删除商品
  cartDelete(e){
    const id = e.detail.id;
    const cartList = wx.getStorageSync(CART_LIST);
    const index = cartList.findIndex(value => value.id === id);
    cartList.splice(index,1);
    wx.setStorageSync(CART_LIST,cartList);
    this.dataGetCartList();
  }
});
