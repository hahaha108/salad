<template>
  <div class="topmenu">
    <el-menu style="height:58px;"
             default-active="choiceIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-row>
        <el-col :span="1"
                :offset="1"><img style="transform: scale(0.25);transform-origin: top;"
               alt="logo"
               src="../assets/logo.png">
        </el-col>
        <el-col :span="1"
                :offset="3">
          <router-link to="/"
                       style="text-decoration: none;">
            <el-menu-item index="1">
              首页
            </el-menu-item>
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
                           :fetch-suggestions="querySearchAsync"
                           placeholder="请输入内容"
                           @select="handleSelect"><i class="el-icon-search"
               slot="suffix"
               @click="handleSelect">
            </i></el-autocomplete>
        </el-col>
        <el-col :span="1"
                :offset="6">
          <el-button>登录</el-button>
        </el-col>
        <el-col :span="1">
          <el-button>注册</el-button>
        </el-col>
        <el-col :span="1">
          <el-button>写文章</el-button>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: '',

    }
  },
  name: 'TopMenu',

  props: {
    choiceIndex: String
  },
  created () {
    console.log('choiceIndex:', this.choiceIndex)
  },
  mounted () {

  },
  methods: {
    querySearchAsync () { },
    handleSelect () { }
  }
}
</script>

<style lang='scss' scoped>
</style>