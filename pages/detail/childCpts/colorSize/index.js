Component({
  properties: {
    info:{
      type: Object,
      value: {}
    }
  },
  data: {
    show: false,
    color:'',
    size:'',
    sto:'',
    colorIndex:null,
    actStyle: 'color: #ed4566;border-color: #ed4566;'
  },
  methods: {
    showPopup() {
      this.setData({show: true});
    },
    onClose() {
      this.setData({show: false});
    },
    onChange(event) {
      console.log(event.detail);
    },
    colorClick(e){
      this.setData({colorIndex:e.currentTarget.dataset.index});
    }
  }
});
