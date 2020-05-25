<template>
  <div class="home">
    <!--导航栏-->
    <div class="topme">
      <TopMenu choiceIndex="1" />
    </div>

    <div class="row">

      <div class="content">
        <el-row>

          <el-col :span="15">
            <div class="left-box">
              <div class="split-line"></div>
              <div v-for="t_post in post_list"
                   class="have-img"
                   :key="t_post">
                <PostListItem :postIntro="t_post"></PostListItem>
                <!-- <el-divider></el-divider> -->
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="right-box">
              <div class="board">
                <img style="width: 280px; height: 55px"
                     src="../assets/img/banner-1.png"
                     fit="fit" />
                <img style="width: 280px; height: 55px"
                     src="../assets/img/banner-2.png"
                     fit="fit" />
                <img style="width: 280px; height: 55px"
                     src="../assets/img/banner-3.png"
                     fit="fit" />
                <img style="width: 280px; height: 55px"
                     src="../assets/img/banner-4.png"
                     fit="fit" />
              </div>

              <!-- 首页右侧 App 下载提示 -->
              <router-link to="/downloadapp"
                           id="index-aside-download-qrbox"
                           class="download">
                <img src="../assets/img/ewm.png"
                     alt="Download index side qrcode"
                     class="qrcode">
                <div class="info">
                  <div class="title">下载简书手机App<i class="iconfont ic-link"></i></div>
                  <div class="description">随时随地发现和创作内容</div>
                </div>
              </router-link>

              <!-- 推荐作者 -->
              <recommendUsers :usersList="t_usersList"></recommendUsers>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--Backtop 回到顶部-->
    <el-backtop></el-backtop>

  </div>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/TopMenu.vue'
import PostListItem from '@/components/posts/PostListItem.vue'
import recommendUsers from '@/components/panels/RecommendUsers.vue'
import * as api from '../api'

export default {
  data () {
    return {
        post_list:[],
      t_usersList: [{
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
  },
  name: 'Home',
  created () {
    // {"id":6,"username":"13","nickname":null,"avatar":"http://192.168.1.103:9527/media/image/default.png","email":null}
    if (localStorage.getItem('info') && JSON.parse(localStorage.getItem('info'))) {
      let infoObj = JSON.parse(localStorage.getItem('info'))
      this.isLogin = true
      this.imgSrc = infoObj.avatar
    }
  },
    mounted() {
        api.postList({}).then((res) => {
            this.post_list = res.data;
        })
    },
  components: {
    TopMenu,
    PostListItem,
    recommendUsers
  }
}
</script>
<style lang="scss"  scoped>
.content {
  //   position: absolute;
  //   overflow: hidden;
  //   left: 50%;
  //   transform: translateX(-50%);
  width: 1000px;
  //   display: inline-block;
  margin: 0 auto;
}
contentsplit-line {
  margin: -5px 0 15px;
}

.have-img {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(240, 240, 240);
  word-wrap: break-word;
}

.right-box {
  margin-left: 58px;
  // margin-left: 4.16667%;
  padding: 30px 0 0;
  width: 280px;
  position: relative;
}

.left-box {
  padding-top: 30px;
  position: relative;
}

.download {
  width: 279px;
  margin-bottom: 30px;
  padding: 10px 22px;
  //   width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  float: left;
  box-sizing: border-box;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: 0.85;
    vertical-align: middle;
    border: 0;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title {
      font-size: 15px;
      color: #333;
    }
    .description {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
}

.board {
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
}
.row {
  margin-top: 59px;
}
.topme {
  position: fixed;
  min-width: 1200px;
  width: 100%;
  z-index: 1;
  top: 0;
}
</style>