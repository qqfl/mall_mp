Component({
    properties: {
      typeList:{
        type: Array,
        value: []
      }
    },
    data: {
      activeKey: 0
    },
    methods: {
      onChange(event) {
        this.triggerEvent('changeSideBar',event.detail)
      }
    }
});
