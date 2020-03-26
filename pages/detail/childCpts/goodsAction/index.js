Component({
    properties: {
      goodsNum:{
        type: Number,
        value: 0
      }
    },
    data: {},
    methods: {
      addToCart(){
        this.triggerEvent('addToCart')
      },
      goCart(){
        wx.switchTab({
          url: '/pages/cart/cart',
          success(){
            const page = getCurrentPages().pop();
            if (page === undefined || page === null){
              return;
            }
            page.onLoad();
          }
        })
      }
    }
});
