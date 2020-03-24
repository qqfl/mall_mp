Page({
  data: {abc: 2},
  onLoad: function (options) {

  },
  cli(e){
    this.setData({abc: e.currentTarget.dataset.id})
  }
});
