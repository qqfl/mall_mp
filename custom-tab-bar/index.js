Page({
  data: {
    active: 0,
    tabPath:[
      '/pages/home/home',
      '/pages/category/category',
      '/pages/cart/cart',
      '/pages/profile/profile'
    ]
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    const tabIndex = event.detail;
    this.setData({ active: tabIndex });
    const url = this.data.tabPath[tabIndex];
    wx.switchTab({url});
  }
});
