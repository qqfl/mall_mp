Page({
    data: {},
    onLoad: function (options) {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on('acceptDataFromOpenerPage', function(id) {
        console.log(id)
      })
    }
});
