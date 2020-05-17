<template>
  <div class="userpostcard">
    <div class="cardtop">
      <el-avatar :size="50" :src="postCardItem.user.avatar"></el-avatar>
      <div class="postuser">
        <div class="nickname">
          <a href style="font-size:15px;color:#333">{{postCardItem.user.nickname}}</a>
          <el-button type="danger" size="mini" class="followbtn" round>关注</el-button>
        </div>
        <div class="usercount">
          <span>总资产{{postCardItem.wordage}}</span>
        </div>
      </div>
    </div>
    <div class="cardtail">
      <div v-for="(mini_post,i) in postCardItem.mini_post_list" :key="i" class="minipost">
        <div class="miniposttitle">
          <router-link :to="mini_post.post_url">{{mini_post.title}}</router-link>
        </div>
        <div class="minipostview">
          <span>阅读 {{mini_post.view_count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    postCardItem: {
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.userpostcard {
  background-color: white;
  padding: 18px;
  margin-left: 30px;
  max-width: 250px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  //   box-sizing: border-box;
  .cardtop {
    margin-bottom: 4px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(240, 240, 240);
    .postuser {
      display: inline-block;
      margin-left: 12px;
      .followbtn {
        margin-left: 10px;
      }
      .usercount {
        color: #969696;
      }
    }
  }

  .usercount {
    margin-top: 4px;
  }
  .cardtail {
    margin-top: 10px;
    .minipost {
      margin-top: 8px;
      .miniposttitle {
        ::v-deep a {
          font-size: 14px;
          line-height: 22px;
          color: #2d2d2d;
          outline: none;
        }
      }
      .minipostview {
        color: #969696;
      }
    }
  }
}
</style>