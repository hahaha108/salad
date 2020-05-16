<template>
  <div class="postpage">
    <h1 class="posttitle">{{postItem.public_title}}</h1>
    <div class="postuserinfo">
      <el-avatar :size="50" :src="postItem.user.avatar"></el-avatar>
      <div class="postuser">
        <div class="nickname">
          <a href style="font-size:15px;color:#333">{{postItem.user.nickname}}</a>
          <el-button type="danger" size="mini" class="followbtn" round>关注</el-button>
        </div>
        <div class="usercount">
          <i class="iconfont ic-paid1" style="color:#ec7259">
            <span>{{postItem.user.gender}}</span>
          </i>
          <span>2020.03.18 08:44:14</span>
          <span>字数 {{postItem.wordage}}</span>
          <span>阅读 {{postItem.views_count}}</span>
        </div>
      </div>
    </div>

    <!-- 正文 -->
    <div class="zhenwen" v-html="postItem.free_content"></div>

    <!-- 底部组件栏 -->
    <div class="posttail">
      <div class="postlikes">
        <el-button circle>
          <i class="iconfont ic-icon_like_dropbox"></i>
        </el-button>
        <span>{{postItem.likes_count}}人点赞></span>
      </div>
      <div class="postdislikes">
        <el-button circle>
          <i class="iconfont ic-icon_like_dropbox"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostPageItem",
  data() {
    return {};
  },
  props: {
    postItem: {
      type: Object
    }
  }
};
</script>
<style lang='scss'>
.postpage {
  max-width: 730px;
  background-color: white;
  padding: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  // .posttitle{
  //     margin-top: 15px;
  // }
  .postuser {
    display: inline-block;
    margin-left: 12px;
  }
  .postuserinfo {
    margin-top: 15px;
  }
  .usercount {
    margin-top: 4px;
  }
  .usercount > span {
    margin-left: 10px;
  }
  .followbtn {
    margin-left: 10px;
  }
  .zhenwen {
    margin-top: 25px;
  }
  .zhenwen p {
    font-weight: 400;
    line-height: 1.8;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .posttail {
    position: relative;
    color: #969696;
  }
  .postlikes {
    display: inline-block;
    margin-top: 12px;
    >span {
      margin-left: 12px;
      font-size: 15px;
    }
  }
  .postdislikes {
    display: inline-block;
    transform: rotate(180deg);
    margin-left: 22px;
  }
}
</style>