<template>
  <div class="postlistitem">
    <el-row>
      <el-col :span="17">
        <div>
          <router-link to="/postdetail"
             class="title">{{postIntro.title}}</router-link>
          <p class="abstract">{{postIntro.intro}}</p>
          <div class="meta">
            <span class="jsd-meta">
              <i class="iconfont ic-paid1"></i> {{postIntro.jsz}}
            </span>
            <a class="nickname"
               target="_blank"
               href="/u/0246c2205384">{{postIntro.author.name}}</a>
            <a target="_blank"
               href="/p/558c000a95c9#comments">
              <i class="iconfont ic-list-comments"></i> {{postIntro.commentNum}}
            </a> <span><i class="iconfont ic-list-like"></i> {{postIntro.likes}}</span>
            <span><i class="iconfont ic-list-money"></i> {{postIntro.admiration}}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6"
              :offset="1">
        <div>
          <el-image style="width: 150px; height: 100px"
                    :src="postIntro.titleImageUrl"
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
          title: "",
          intro: "",
          url: "",
          titleImageUrl: "",
          jsz: 0,// 简书赞
          author: {
            name: "",
            url: ""
          },
          commentNum: 0,
          likes: 0,
          views: 0,
          admiration: 0
        }
      }
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
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #000;
  &:visited {
    color: #969696;
  }
  &:hover {
    color: blue;
  }
  &:link {
    color: yellow;
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
  color: #ea6f5a!important;
}
</style>