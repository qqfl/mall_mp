Component({
    properties: {
      totalPrice:{
        type:Number,
        value:0
      }
    },
    data: {
      checked: true
    },
    methods: {
      onChange(event) {
        this.setData({
          checked: event.detail
        });
        this.triggerEvent('allCheckedClick',{status: event.detail})
      }
    }
});
