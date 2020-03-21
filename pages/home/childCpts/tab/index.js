Component({
  properties: {
    pops: {
      type: Array,
      value: []
    },
    news: {
      type: Array,
      value: []
    },
    sells: {
      type: Array,
      value: []
    }
  },
  data: {
    active: 'pop'
  },
  methods: {
    onChange: function (event) {
      this.triggerEvent('myEvent',{type:event.detail.name})
    }
  }
});
