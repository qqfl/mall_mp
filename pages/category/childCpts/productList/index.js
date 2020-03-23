Component({
    properties: {
      list:{
        type:Array,
        value:[]
      }
    },
    data: {},
    methods: {
      goDetail(e){
        const ind = e.currentTarget.dataset.ind;
        wx.navigateTo({
          url:"../detail/detail",
          success(res){
            res.eventChannel.emit('acceptDataFromOpenerPage',{id: ind%3})
          }
        })
      }
    }
});
