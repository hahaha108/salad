<template>
  <div class="settings">
    <div class="topme">
      <TopMenu choiceIndex="1" />
      <div style='width:900px;margin: auto;'>
        <div class="leftMenu"
             style="display: inline-block;">
          <el-menu router
                   style="width: 130px;display: inline-block;"
                   default-active="/user/settings"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose">
            <el-menu-item index="/user/settings">
              <i class="el-icon-menu"></i>
              <span slot="title">基础设置</span>
            </el-menu-item>
            <el-menu-item index="/user/settings/personalInformation">
              <i class="el-icon-menu"></i>
              <span slot="title">个人资料</span>
            </el-menu-item>
            <el-menu-item index="/user/settings/accountManagement">
              <i class="el-icon-document"></i>
              <span slot="title">账号管理</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div style="display: inline-block;width:  calc(100% - 281px);">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue'
// import * as api from '../api'
export default {
  name: "Settings",
  components: {
    TopMenu,
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .el-menu-item,
.el-submenu__title {
  white-space: pre-wrap;
  min-width: 80px;
}
</style>