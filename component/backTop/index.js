Component({
    properties: {},
    data: {},
    methods: {
      goTop(){
        wx.pageScrollTo({
          scrollTop: 0
        })
      }
    }
});
