Component({
    properties: {},
    data: {
      show: false,
      postage: ['72小时发货','7天无理由退货','退货补运费']
    },
    methods: {
      showPopup() {
        this.setData({ show: true });
      },
      onClose() {
        this.setData({ show: false });
      }
    }
});
