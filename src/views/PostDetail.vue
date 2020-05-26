<template>
  <div class="postdetail">
    <!--导航栏-->
    <div class="topme">
      <TopMenu />
    </div>
    <!-- 左边栏 -->
    <div :class="{leftcade:true,'leftcade-unfixed':flag,'leftcade-fixed':!flag}">
      <div class="likes">
        <div>
          <el-button circle>
            <i class="iconfont ic-icon_like_dropbox"></i>
          </el-button>
        </div>
        <div>
          <span>{{t_note.likes_count}}赞</span>
        </div>
      </div>
      <div class="zans">
        <div>
          <el-button circle>赏</el-button>
        </div>
        <div>
          <span>赞赏</span>
        </div>
      </div>
    </div>

    <div class="deatilpage">
      <div class="row">
        <el-row>
          <el-col :span="16">
            <div class="left-box">
              <PostPageItem :postItem="t_note"></PostPageItem>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="rigth-box">
              <UserPostCardItem :postCardItem="t_note"></UserPostCardItem>
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
import TopMenu from "@/components/TopMenu.vue";
import PostPageItem from "@/components/posts/PostPageItem.vue";
import UserPostCardItem from "@/components/posts/UserPostCardItem.vue";
import * as api from '../api'
import { Message } from 'element-ui';
export default {
  data () {
    return {
      flag: true,
      t_note: null
    };
  },
  mounted () {
    // console.log(this.$route)
    this.getDetailContent(this.$route.params.id)
    // 动态判断左边框left值
    window.addEventListener("resize", () => {
      console.log("window.innerWidth:", window.innerWidth);
      if (window.innerWidth > 1200) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  },
  methods: {
    getDetailContent (id) {
      api.getDetailContent(id).then((res) => {
        this.t_note = res.data
      }).catch((err) => { err.message && Message.error(err.message) });
    }
  },
  name: "PostDetail",
  components: {
    TopMenu,
    PostPageItem,
    UserPostCardItem
  }
};
</script>

<style lang="scss" scoped>
.topme {
  position: fixed;
  min-width: 1200px;
  width: 100%;
  z-index: 1;
  top: 0;
}
.postdetail {
  background-color: #f9f9f9;
}
.leftcade {
  position: fixed;
  top: 216px;
  font-size: 14px;
  text-align: center;
  color: #969696;
  .zans {
    margin-top: 10px;
  }
}
.leftcade-unfixed {
  left: calc((100vw - 1000px) / 2 - 70px);
}
.leftcade-fixed {
  left: 30px;
}
.row {
  min-width: 1000px;
  max-width: 1000px;
  margin: 0 auto;
}
.deatilpage {
  margin-top: 59px;
}
</style>