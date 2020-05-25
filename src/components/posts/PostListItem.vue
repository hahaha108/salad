<template>
  <div class="postlistitem">
    <el-row>
      <el-col :span="17">
        <div>
          <span class="title"
                @click="toDetailPage(postIntro.id)"> {{postIntro.public_title}}</span>
          <!-- <router-link to="id"
                       class="title"></router-link> -->
          <p class="abstract">{{postIntro.description}}</p>
          <div class="meta">
            <!--<span class="jsd-meta">-->
            <!--<i class="iconfont ic-paid1"></i> {{postIntro.jsz}}-->
            <!--</span>-->
            <a class="nickname"
               target="_blank"
               href="/u/0246c2205384">{{postIntro.user.username}}</a>
            <a target="_blank"
               href="/p/558c000a95c9#comments">
              <i class="iconfont ic-list-comments"></i> {{postIntro.comment_count}}
            </a>
            <span><i class="iconfont ic-list-like"></i> {{postIntro.likes_count}}</span>
            <span><i class="iconfont ic-list-money"></i> {{postIntro.admiration_count}}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6"
              :offset="1">
        <div>
          <el-image v-if="postIntro.title_image"
                    style="width: 150px; height: 100px"
                    :src="postIntro.title_image"
                    fit="fit"></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    postIntro: {
      type: Object,
      default: function () {
        return {
          public_title: "",
          description: "",
          // url: "",
          title_image: "",
          // jsz: 0,// 简书赞
          user: {
            username: "",
            // url: ""
          },
          comment_count: 0,
          views_count: 0,
          likes_count: 0,
          admiration_count: 0
        }
      }
    }
  },
  methods: {
    toDetailPage (id) {
      this.$router.push({ path: `/postdetail/${id}` })
    }
  }
}
</script>

<style lang='scss' scoped>
.meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  a {
    margin-right: 10px;
    color: #b4b4b4;
  }
}
.abstract {
  min-height: 54px;
  text-align: left;
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  .jsd-meta {
    color: #ea6f5a !important;
  }
  .nickname {
    margin-right: 10px;
    color: #b4b4b4;
  }
}
.title {
  cursor: pointer;
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #333;
  &:visited {
    color: #969696;
  }
  &:active {
    color: pink;
  }
}
.meta span {
  margin-right: 10px;
  color: #b4b4b4;
}
.jsd-meta {
  color: #ea6f5a !important;
}
</style>