var postsData=require('../../data/posts-data.js');
Page({
    data:{

    },
    onLoad:function(){
        // this.data.postList=postsData.postList;
        this.setData({
            postList:postsData.postList
        });
    }
})