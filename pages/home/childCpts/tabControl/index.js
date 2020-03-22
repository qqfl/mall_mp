Component({
    properties: {
      titles:{
        type: Array,
        value: []
      }
    },
    data: {
      active: 0
    },
    methods: {
      clickActive(e){
        const act = e.currentTarget.dataset.ind;
        this.setData({active:act});
        this.triggerEvent('myTabEvent',act,{})
      }
    }
});
