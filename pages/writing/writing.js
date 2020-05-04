// pages/writing/writing.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    imgs_count: 1,
    text: ""
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 保存心情
   */
  onSave: function () {
    var _this = this;
    
  }, 

  /**
   * 选择图片
   */
  chooseImage: function () {
    var that = this;
    if (this.data.imgs_count >= 9) {
      return false
    }

    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imgs: that.data.imgs.concat(tempFilePaths),
          imgs_count: tempFilePaths.length
        })
      }
    })
  },

  /**
   * 预览图片
   * @param {*} e 
   */
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.imgs // 需要预览的图片http链接列表
    })
  },

  /**
   * 删除图片
   * @param {*} e 
   */
  deleteImage: function(e) {
    var that = this;
    var images = that.data.imgs;   
     var index = e.currentTarget.dataset.index; //获取当前长按图片下标
    wx.showModal({
      title: '系统提醒',
      content: '确定要删除此图片吗？',
      success: function(res) {
        if (res.confirm) {
          images.splice(index, 1);
        } else if (res.cancel) {
            return false;
        }
        that.setData({
          imgs: images
        });
      }
    })
  },


})