<template>
  <div class="basic-setting">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-avatar size="large"
                 :src="avatar"></el-avatar>
      <el-upload class="upload-demo"
                 action=""
                 :limit="1"
                 :auto-upload="false"
                 :show-file-list="false"
                 :on-change='changeUpload'
                 :file-list="[]">
        <el-button type="primary"
                   round
                   @click="handleCropper"
                   plain>更换头像</el-button>
      </el-upload>
      <!-- vueCropper 剪裁图片实现-->
      <el-dialog title="图片剪裁"
                 :visible.sync="dialogVisible"
                 append-to-body>
        <div class="cropper-content">
          <div class="cropper"
               style="text-align:center">
            <vueCropper ref="cropper"
                        :img="option.img"
                        :outputSize="option.size"
                        :outputType="option.outputType"
                        :info="true"
                        :full="option.full"
                        :canMove="option.canMove"
                        :canMoveBox="option.canMoveBox"
                        :original="option.original"
                        :autoCrop="option.autoCrop"
                        :fixed="option.fixed"
                        :fixedNumber="option.fixedNumber"
                        :centerBox="option.centerBox"
                        :infoTrue="option.infoTrue"
                        :fixedBox="option.fixedBox"></vueCropper>
          </div>
        </div>
        <div slot="footer"
             class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="finish"
                     :loading="loading">确认</el-button>
        </div>
      </el-dialog>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-button type="primary"
                 round
                 @click="handleSubmit"
                 plain>保存</el-button>
    </el-form>
  </div>
</template>
<script>
import { VueCropper } from 'vue-cropper'
import * as api from '../api'
import { Message } from 'element-ui';
export default {
  name: 'DownloadApp',
  components: {
    VueCropper,
  },
  methods: {
    // 点击裁剪，这一步是可以拿到处理后的地址
    finish () {
      this.$refs.cropper.getCropBlob((data) => {
          const fd = new FormData();
        fd.append("avatar", data, 'avatar.jpg');
        this.loading = true
        //上传服务器
        api.putImg(fd).then(result => {
          this.dialogVisible = false
          this.picsList.push(result.url)
        }).catch(err => {
          console.log(err)
          this.loading = false
        })
      })
    },
    // 上传按钮   限制图片大小
    changeUpload (file) {
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!')
        return false
      }
      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        this.option.img = URL.createObjectURL(file.raw)  // 获取URL
        this.dialogVisible = true
      })
    },
    handleCropper () {
      this.showCropper = true
    },
    handleSubmit () {
      console.log(this.form, this.id)
      api.handleSubmit(this.form, this.id).then((res) => {
        if (res.code === 200) {
          Message.success('修改成功')
        }
      }).catch((err) => { err.message && Message.error(err.message) });
    }
  },
  created () {
    if (localStorage.getItem('token') && localStorage.getItem('info')) {
      let info = JSON.parse(localStorage.getItem('info'))
      this.avatar = info.avatar
      this.id = info.id
    }
  },
  data () {
    return {
      dialogVisible: false,
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        fixedBox: false, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [5, 5], // 截图框的宽高比例
        full: false, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      picsList: [],  //页面显示的数组
      // 防止重复提交
      loading: false,
      showCropper: false,
      id: '',
      avatar: '',
      form: {
        nickname: '',
        email: '',
      }
    }
  }
}
</script>
<style lang="scss">
// 截图
.cropper-content {
  .cropper {
    width: auto;
    height: 300px;
  }
}
</style>
