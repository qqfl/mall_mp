const computedBehavior = require('miniprogram-computed');
Component({
  behaviors: [computedBehavior],
  properties: {
    price:{
      type:Number,
      value:0,
    },
    discount:{
      type:Number,
      value:0,
    },
    point:{
      type:Number,
      value:0,
    },
  },
  data: {},
  computed:{
    formatPrice(data){
      return data.price.toFixed(2);
    }
  },
  methods: {}
});
