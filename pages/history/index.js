Page({
    data: {
        list: []
    },
    onLoad() {
        let list = [];
        try {
            list = JSON.parse(wx.getStorageSync('score_history')) || [];
        } catch (e) {
            list = [];
        }
        this.setData({ list });
    }
})