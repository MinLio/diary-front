var app = getApp()

Page({
  data: {
    bg_img: {
      url: "../../img/flyingpig.jpg"
    }
  }, 
  
  /*监听页面加载*/
  onLoad: function() {

  },

  // 写日记
  addDiary: function (params) {
    wx.navigateTo({
      url: '/pages/writing/writing',
    })
  }
})