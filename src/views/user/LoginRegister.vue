<template>
    <div class="loginContainer">
        <div class="innerBox">
            <el-menu :default-active="activeIndex" class="login-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">登录</el-menu-item>
                <el-menu-item index="2">注册</el-menu-item>
            </el-menu>

            <div class="rowBox">
            <div v-if="activeIndex == 1" class="loginBox">
                <el-form :model="loginFormInfo">
                    <el-form-item>
                        <el-input placeholder="用户名" v-model="loginFormInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="密码" v-model="loginFormInfo.password"></el-input>
                    </el-form-item>
                    <div class="subBtn">
                    <el-button type="danger" @click="onLoginSubmit">点击登录</el-button>
                    </div>
                </el-form>
            </div>
            <div v-else  class="registerBox">
                <el-form :model="registerFormInfo">
                    <el-form-item>
                        <el-input placeholder="用户名" v-model="registerFormInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="密码" v-model="registerFormInfo.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="确认密码" v-model="registerFormInfo.re_password"></el-input>
                    </el-form-item>
                    <div class="subBtn">
                        <el-button type="danger" @click="onRegisterSubmit">注册</el-button>
                    </div>
                </el-form>
            </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                activeIndex: this.$route.query.default_index ? this.$route.query.default_index : "1",
                loginFormInfo: {
                    username: '',
                    password: ''
                },
                registerFormInfo: {
                    username: '',
                    password: '',
                    re_password:''
                }
            }
        },
        methods:{
            handleSelect(key) {
                this.activeIndex = key;
            },
            onLoginSubmit() {
                console.log('submit!');
            },
            onRegisterSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style lang="scss" scoped>
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
            .login-menu{
                margin-bottom: 32px;
            }
            .rowBox{
                ::v-deep input{
                    width: 80%;
                }
            .subBtn{
                margin-top: 30px;
                ::v-deep button {
                    width: 70%;
                    border-radius: 20px;
                }
            }
            }
        }
    }


</style>