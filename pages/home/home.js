Page({
    data: {},
    onLoad: function (options) {

    }
});
Component({
  pageLifetimes:{
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()){
        this.getTabBar().setData({active: 0})
      }
    }
  }
});
