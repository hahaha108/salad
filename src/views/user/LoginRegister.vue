<template>
  <div class="loginContainer">
    <div class="innerBox">
      <el-menu :default-active="activeIndex"
               class="login-menu"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1">登录</el-menu-item>
        <el-menu-item index="2">注册</el-menu-item>
      </el-menu>

      <div class="rowBox">
        <div v-if="activeIndex == 1"
             class="loginBox">
          <el-form :model="loginFormInfo"
                   :rules="rules"
                   ref="ruleForm">
            <el-form-item prop="username">
              <el-input placeholder="用户名"
                        v-model="loginFormInfo.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码"
                        v-model="loginFormInfo.password"
                        :type="pwdType1">
                <i slot="suffix"
                   class="el-input__icon el-icon-view"
                   @click="showPwd(1)"></i>
              </el-input>
            </el-form-item>
            <div class="subBtn">
              <el-button type="danger"
                         @click="onLoginSubmit">点击登录</el-button>
            </div>
          </el-form>
        </div>
        <div v-else
             class="registerBox">
          <el-form :model="registerFormInfo"
                   :rules="rules"
                   ref="registerForm">
            <el-form-item prop="username">
              <el-input placeholder="用户名"
                        v-model="registerFormInfo.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码"
                        v-model="registerFormInfo.password"
                        :type="pwdType2">
                <i slot="suffix"
                   class="el-input__icon el-icon-view"
                   @click="showPwd(2)"></i></el-input>
            </el-form-item>
            <el-form-item prop="re_password">
              <el-input placeholder="确认密码"
                        v-model="registerFormInfo.re_password"
                        :type="pwdType3">
                <i slot="suffix"
                   class="el-input__icon el-icon-view"
                   @click="showPwd(3)"></i></el-input>
            </el-form-item>
            <el-form-item prop="captcha_code">
              <div class="captcha">
                <el-input placeholder="验证码"
                          v-model="registerFormInfo.captcha_code"></el-input>
                <el-image @click="getImg"
                          :src="captchaImageSrc">
                </el-image>
              </div>
            </el-form-item>
            <div class="subBtn">
              <el-button type="danger"
                         @click="onRegisterSubmit">注册</el-button>
            </div>
          </el-form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Message } from 'element-ui'
import * as api from '../../api'
export default {
  name: "Login",
  data () {
    return {
      pwdType1: 'password',
      pwdType2: 'password',
      pwdType3: 'password',
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        re_password: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        captcha_code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
      },
      activeIndex: this.$route.query.default_index ? this.$route.query.default_index : "1",
      loginFormInfo: {
        username: '',
        password: ''
      },
      registerFormInfo: {
        username: '',
        password: '',
        re_password: '',
        captcha_code: '',
        captcha_id: ''
      },
      captchaImageSrc: ''
    }
  },
  mounted () {
    this.getImg()
  },
  methods: {
    getImg () {
      api.captchaImage({}).then(
        (res) => {
          this.captchaImageSrc = "data:" + res.data.type + ";" + res.data.encoding + "," + res.data.image_base;
          this.registerFormInfo.captcha_id = res.data.id
        }
      )
    },
    ...mapMutations({
      set_isLogn: 'SET_ISLOGIN'
    }),
    showPwd (v) {
      this['pwdType' + v] === 'password' ? this['pwdType' + v] = '' : this['pwdType' + v] = 'password';
    },
    getInfoAction () {
      api.getInfo({})
        .then((res) => {
          localStorage.setItem('info', JSON.stringify(res.data))
          localStorage.setItem('isLogin', 1)
          this.set_isLogn(true)
          setTimeout(() => {
            this.$router.push('/')
          }, 200)
        }).catch((err) => { err.message && Message.error(err.message) })
    },
    handleSelect (key) {
      if (key == 2) {
        this.$refs.ruleForm && this.$refs.ruleForm.clearValidate()
      } else {
        this.$refs.registerForm && this.$refs.registerForm.clearValidate()
      }
      this.$nextTick(() => {
        this.activeIndex = key;
      })
    },
    onLoginSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          api.login({
            username: this.loginFormInfo.username,
            password: this.loginFormInfo.password
          })
            .then((res) => {
              localStorage.setItem('token', res.data.token)
              if (res.code === 200) {
                Message.success('登陆成功！')
                this.getInfoAction()
              } else {
                  Message.error(res.message)
              }
            }).catch((err) => { err.message && Message.error(err.message) });
        } else {
          return false;
        }
      });
    },
    onRegisterSubmit () {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          if (this.registerFormInfo.re_password !== this.registerFormInfo.password) {
            Message.error('两次输入密码不一致，请修改')
          } else {
            api.register({
              username: this.registerFormInfo.username,
              password: this.registerFormInfo.password,
              captcha_code: this.registerFormInfo.captcha_code,
              captcha_id: this.registerFormInfo.captcha_id
            })
              .then((res) => {
                if (res.code == 200) {
                  Message.success({
                    message: '注册成功！请登录...',
                    duration: 700
                  })
                  this.loginFormInfo.username = res.data.username
                  this.activeIndex = '1'
                } else {
                  Message.error(res.message)
                }
              }).catch((err) => {
                err.message && Message.error(err.message)
              });
          }
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.captcha {
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  .el-input {
    width: calc(100% - 89px);
    ::v-deep .el-input__inner {
      width: 100% !important;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      border-right: 0;
    }
  }
  ::v-deep .el-image {
    width: 93px;
    height: 38px;
    border: 1px solid #dcdfe6;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
}
.loginContainer {
  background-color: #f1f1f1;
  height: 100%;
  text-align: center;
  .innerBox {
    width: 400px;
    height: 500px;
    background: white;
    margin: 100px auto;
    padding: 50px 50px 30px;
    display: inline-block;
    border-radius: 4px;
    .login-menu {
      margin-bottom: 32px;
    }
    .rowBox {
      ::v-deep input {
        width: 80%;
      }
      .subBtn {
        margin-top: 30px;
        ::v-deep button {
          width: 70%;
          border-radius: 20px;
        }
      }
    }
  }
}
.captcha {
  img {
    display: inline-block;
    width: 80px;
    height: auto;
  }
}
</style>