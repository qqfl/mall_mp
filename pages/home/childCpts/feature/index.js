Component({
    properties: {
      list:{
        type:Array,
        value:[]
      }
    },
    data: {},
    methods: {
      myImgLoad(){
        this.triggerEvent('isImgLoad')
      }
    }
});
