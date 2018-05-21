//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎来到枸杞影视',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indexList: [
      {
        title: "头号玩家",
        tag: "动作片 / 科幻片 / 冒险电影",
        time: "2018-05-09",
        img: "../images/thwj.jpg"
      },
      {
        title: "暴裂无声",
        tag: "剧情片 / 犯罪片 / 悬疑片",
        time: "2018-04-04",
        img: "../images/blws.jpg"
      },
      {
        title: "红海行动",
        tag: "剧情片 / 动作片 / 犯罪片",
        time: "2018-02-16",
        img: "../images/hhxd.jpg"
      }

    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
