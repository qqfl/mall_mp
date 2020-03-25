Component({
  properties: {
    info:{
      type: Object,
      value: {}
    }
  },
  data: {
    show: false,
    image: '',
    sto: '',
    color: '',
    size: '',
    qty: 1,
    colorIndex: 0,
    sizeIndex: 0,
    actStyle: 'color: #ed4566;border-color: #ed4566;'
  },
  methods: {
    showPopup() {
      const ci = this.data.colorIndex;
      const si = this.data.sizeIndex;
      this.setData({show: true,});
      this.colorSet(ci);
      this.sizeSet(si);
    },
    onClose() {
      this.setData({show: false});
    },
    onChange(event) {
      this.setData({qty: event.detail});
    },
    colorClick(e){
      const index = e.currentTarget.dataset.index;
      this.setData({colorIndex: index,});
      this.colorSet(index);
    },
    sizeClick(e){
      const index = e.currentTarget.dataset.index;
      this.setData({sizeIndex: index,});
      this.sizeSet(index);
    },
    colorSet(index){
      this.setData({
        sto: this.data.info.color[index].sto,
        image: this.data.info.color[index].img,
        color: this.data.info.color[index].col,
      });
    },
    sizeSet(index){
      this.setData({size: this.data.info.size[index]});
    }
  }
});
