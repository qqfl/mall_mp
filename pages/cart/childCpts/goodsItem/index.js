Component({
    properties: {
      info:{
        type:Array,
        value:[]
      }
    },
    data: {},
    methods: {
      onChange(event) {
        const id = event.currentTarget.dataset.id;
        const index = this.data.info.findIndex(value => value.id === id);
        // 小程序没有vue的v-model,手动实现
        this.triggerEvent('checkBoxChange',{index, checked: event.detail})
      },
      cartDelete(e){
        this.triggerEvent('cartDelete',{id:e.currentTarget.dataset.id})
      }
    }
});
