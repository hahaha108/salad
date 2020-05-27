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
                style="float: right;margin-top: 1px;height: 60px; line-height: 60px;">
          <!-- <el-col :span="1"> -->
          <el-dropdown v-if="getIsLogin"
                       @command="handleCommand"
                       class="dropbtn">
            <span class="el-dropdown-link">
              <el-avatar :size="40"
                         :src="info&&info.avatar||''"></el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item style="color:#303133;font-weight:400;"
                                :command="handleSettings"><i class="iconfont ic-navigation-settings"></i>账号设置
              </el-dropdown-item>
              <el-dropdown-item style="color:#303133;font-weight:400;"
                                :command="logoutConfirm"><i class="iconfont ic-navigation-signout"></i>退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-button v-if="!getIsLogin"
                     type="text"
                     style="color:#303133;font-weight:400;">
            <router-link :to="{path:'/login_register/', query:{default_index:1}}"
                         target="_blank">登录
            </router-link>
          </el-button>
          <!-- </el-col> -->
          <!-- <el-col :span="1"> -->
          <el-button v-if="!getIsLogin"
                     type="text"
                     style="color:#303133;font-weight:400;">
            <router-link :to="{path:'login_register/', query:{default_index:2}}"
                         target="_blank">注册
            </router-link>
          </el-button>
          <!-- </el-col>
                              <el-col :span="1">-->
          <el-button type="danger"
                     @click="handleWrite">
            写文章
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
    handleCommand (command) {
      return command()
    },
    handleSettings () {
      this.$router.push({ path: `/user/settings` });
    },
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
      }).catch((err) => {
        err.message && Message.error(err.message)
      });
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
  /*position: relative;*/
  /*top: 50%;*/
  /*transform: translateY(9px);*/
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

.dropbtn {
  /*top: 30%;*/
  transform: translateY(13px);
  padding-right: 20px;
}
.el-icon-arrow-down {
  font-size: 16px;
  font-weight: 900;
  color: #ea6f5a;
}
</style>