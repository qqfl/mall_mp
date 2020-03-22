Component({
    properties: {
      list: {
        type: Array,
        value: []
      }
    },
    data: {},
    methods: {
      imgLoad(){
        this.triggerEvent('isImgLoad');
      }
    }
});
