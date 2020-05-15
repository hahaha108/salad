<!--推荐作者面板-->

<template>
  <div class="recommended-authors">
    <div class="title"><span>推荐作者</span>
      <a class="page-change"><i class="iconfont ic-search-change"
           style="transform: rotate(0deg);"></i>
        换一批
      </a></div>

    <ul class="list">
      <li v-for="(user,index) in usersList"
          :key="index">
        <a :href="user.url"
           target="_blank"
           class="avatar">
          <img :src="user.avatar">
        </a>
        <a class="follow"
           state="0"><i class="iconfont ic-follow"></i>关注
        </a> <a :href="user.url"
           target="_blank"
           class="name">
          {{user.name}}
        </a>
        <p>
          {{user.intro}}
        </p>
      </li>
    </ul>

    <router-link to="/recommendations/users"
                 target="_blank"
                 class="find-more">
      查看全部<i class="iconfont ic-link"></i></router-link>

  </div>
</template>

<script>
export default {
  name: "recommendUsers",
  props: {
    usersList: Array,
    default: [{
      name: "董克平日记",
      avatar: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      url: "https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users",
      intro: "写了958k字 · 3.7k喜欢",
    },
    {
      name: "董克平日记",
      avatar: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      url: "https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users",
      intro: "写了958k字 · 3.7k喜欢",
    },
    {
      name: "董克平日记",
      avatar: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      url: "https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users",
      intro: "写了958k字 · 3.7k喜欢",
    },
    {
      name: "董克平日记",
      avatar: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      url: "https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users",
      intro: "写了958k字 · 3.7k喜欢",
    },]
  }
}
</script>

<style lang='scss' scoped>
.recommended-authors {
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  box-sizing: border-box;
  .title {
    text-align: left;
    .page-change {
      float: right;
      display: inline-block;
      font-size: 14px;
      color: #969696;
      cursor: pointer;
    }
  }
  .list {
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    padding-left: 0;
    li {
      margin-top: 15px;
      line-height: 20px;
    }
    .avatar {
      float: left;
      width: 48px;
      height: 48px;
      margin-right: 10px;
      display: block;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .follow {
      float: right;
      margin-top: 5px;
      padding: 0;
      font-size: 13px;
      color: #42c02e;
    }
    .name {
      padding-top: 5px;
      margin-right: 60px;
      font-size: 14px;
      display: block;
    }
    p {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
  .find-more {
    position: absolute;
    padding: 7px 7px 7px 12px;
    /*width: 480px;*/
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>