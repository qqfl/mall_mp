require('mockData.js');
export default function (options) {
  const HOST = 'http://www.test.api/';
  return new Promise((resolve, reject) => {
    wx.request({
      url: HOST + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
