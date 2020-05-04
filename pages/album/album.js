// pages/album/album.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    setting: {
      "path": ""
    },
    imgs: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const query = wx.createSelectorQuery()
    query.select('.album-canvas-editor')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')

        //同步获取设备信息
        const dpr = wx.getSystemInfoSync().pixelRatio

        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
      })
  },

  // 设置背景图片
  setBg: function () {
    var ctx = wx.createCanvasContext('canvasId', component)

    wx.chooseImage({
      count: 9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        app.globalData.uploadData = res;
      },
      complete: (res) => {},
    })
  },

  // 保存画布
  saveImg: function () {
    console.log("save img");
  }
})