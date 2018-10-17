//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    rows: []
  },
  onLoad: function (options) {
    //功能一:图片列表
    wx.request({
      url: "http://127.0.0.1:3000/getIconList1",
      success: (res) => {
        this.setData({
          rows: res.data
        });
      }
    });
  }
})
