<template>
  <div class="topmenu">
    <el-menu style="height:58px;"
             :default-active="choiceIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-row>
        <el-col :span="2">
          <!-- style="transform: scale(0.25);transform-origin: top;" -->
          <img alt="logo"
               style="width: 113px;width: 100px;height: 56px;"
               src="../assets/img/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" />
        </el-col>
        <el-col :span="1">
          <router-link to="/"
                       style="text-decoration: none;">
            <el-menu-item index="1">首页</el-menu-item>
          </router-link>
        </el-col>
        <el-col :span="2">
          <router-link to="/downloadapp"
                       style="text-decoration: none;">
            <el-menu-item index="2">下载App</el-menu-item>
          </router-link>
        </el-col>
        <el-col :span="4"
                class="inp"
                style="padding-top: 6px;">
          <el-autocomplete v-model="state"
                           style="margin-top: 3px;"
                           :fetch-suggestions="querySearchAsync"
                           placeholder="请输入内容"
                           @select="handleSelect">
            <i style="color:#969696;position: relative;top: 5px;font-size: 19px;"
               class="iconfont ic-search"
               slot="suffix"
               @click="handleSelect"></i>
          </el-autocomplete>
        </el-col>
        <el-col :span="7"
                style="float: right;margin-top: 11px;">
          <!-- <el-col :span="1"> -->
          <el-avatar v-if="getIsLogin"
                     size="small"
                     :src="info&&info.avatar||''"></el-avatar>
          <el-button v-if="getIsLogin"
                     type="text"
                     style="color:#303133;font-weight:400;"
                     @click='logoutConfirm'>
            退出
          </el-button>
          <el-button v-if="!getIsLogin"
                     type="text"
                     style="color:#303133;font-weight:400;">
            <router-link :to="{path:'login_register/', query:{default_index:1}}"
                         target="_blank">登录</router-link>
          </el-button>
          <!-- </el-col> -->
          <!-- <el-col :span="1"> -->
          <el-button v-if="!getIsLogin"
                     type="text"
                     style="color:#303133;font-weight:400;">
            <router-link :to="{path:'login_register/', query:{default_index:2}}"
                         target="_blank">注册</router-link>
          </el-button>
          <!-- </el-col>
                    <el-col :span="1">-->
          <el-button type="danger"
                     @click="handleWrite">
            <!-- <router-link to="/publish"
                         target="_blank"
                         style="cursor: pointer;color: #FFFFFF;text-decoration: none;"> -->
            写文章
            <!-- </router-link> -->
          </el-button>
          <!-- </el-col> -->
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { Message } from 'element-ui';
export default {
  data () {
    return {
      info: null,
      state: ""
    };
  },
  name: "TopMenu",
  props: {
    choiceIndex: String
  },
  created () {
    if (localStorage.getItem('token') && localStorage.getItem('info')) {
      this.info = JSON.parse(localStorage.getItem('info'))
    }
  },
  computed: {
    ...mapGetters([
      'getIsLogin'
    ])
  },
  mounted () {
  },
  methods: {
    handleWrite () {
      if (this.getIsLogin) {
        this.$router.push('/publish')
      } else {
        Message.error('请先登录！')
        this.$router.push('/login_register/?default_index=1')
      }
    },
    ...mapMutations({
      set_isLogn: 'SET_ISLOGIN'
    }),
    logoutConfirm () {
      this.$confirm('确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.logoutAction()
      }).catch((err) => { err.message && Message.error(err.message) });
    },
    logoutAction () {
      localStorage.removeItem('token')
      localStorage.removeItem('info')
      localStorage.removeItem('isLogin')
      this.set_isLogn(false)
    },
    querySearchAsync () {
    },
    handleSelect () {
    }
  }
};
</script>

<style lang='scss' scoped>
.el-avatar {
  position: relative;
  top: 50%;
  transform: translateY(9px);
}
.topmenu {
  ::v-deep .el-input {
    .el-input__inner {
      border-radius: 18px !important;
    }
  }
  .el-button + .el-button {
    margin-left: 30px !important;
  }
}
div:focus {
  outline: none;
}
</style>