<template>
    <div>
        <el-row class="warp">
            <!--
            Form 组件提供了表单验证的功能，只需要通过 rule 属性传入约定的验证规则，并 Form-Item 的 prop 属性设置为需校验的字段名即可。具体可以参考官网：http://element.eleme.io/#/zh-CN/component/form
            -->
            <el-col :span="24" class="warp-main">
                <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="120px">
                    <el-form-item label="标题" prop="public_title">
                        <el-input v-model="infoForm.public_title"></el-input>
                    </el-form-item>

                    <!--使用编辑器
                    -->
                    <el-form-item label="正文">
                        <div class="edit_container">
                            <quill-editor v-model="infoForm.free_content"
                                          ref="myQuillEditor"
                                          class="editer"
                                          :options="editorOption">
                            </quill-editor>
                        </div>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认发布</el-button>
                    </el-form-item>
                </el-form>
            </el-col>


        </el-row>
    </div>
</template>

<script>
    import {quillEditor} from 'vue-quill-editor' // 调用富文本编辑器
    import 'quill/dist/quill.snow.css' // 富文本编辑器外部引用样式  三种样式三选一引入即可
    import * as api from '../../api'
    import {Message} from 'element-ui'


    export default {
        name: "PostPublish",
        data() {
            return {
                infoForm: {
                    public_title: '',
                    free_content: '',
                },
                editorOption: {
                    theme: 'snow',
                    placeholder: '请输入正文'
                },
                //表单验证
                rules: {
                    a_title: [
                        {required: true, message: '请输入标题', trigger: 'blur'}
                    ],
                    a_content: [
                        {required: true, message: '请输入正文', trigger: 'blur'}
                    ]
                },
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted() {
            //初始化
        },
        methods: {
            onSubmit() {
                //提交
                this.$refs.infoForm.validate((valid) => {
                    if (valid) {
                        api.postPublish(this.infoForm).then(res => {
                            if (res.code == 200) {
                                this.$message({
                                    message: res.msg,
                                    type: 'success'
                                });
                                this.$router.push('/');
                            } else {
                                this.$message({
                                    message: res.msg,
                                    type: 'error'
                                });
                            }
                        }).catch(() => {
                            Message.error('发布失败，请登录后操作！')
                        });
                    }
                });
            }
        },
        components: {
            quillEditor //使用编辑器
        }
    }
</script>

<style lang="scss">
    .editer {
        line-height: normal !important;
        height: 730px;

        .ql-snow .ql-tooltip[data-mode=link]::before {
            content: "请输入链接地址:";
        }
        .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
            border-right: 0px;
            content: '保存';
            padding-right: 0px;
        }

        .ql-snow .ql-tooltip[data-mode=video]::before {
            content: "请输入视频地址:";
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item::before {
            content: '14px';
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
            content: '10px';
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
            content: '18px';
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
            content: '32px';
        }

        .ql-snow .ql-picker.ql-header .ql-picker-label::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item::before {
            content: '文本';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
            content: '标题1';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
            content: '标题2';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
            content: '标题3';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
            content: '标题4';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
            content: '标题5';
        }
        .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
        .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
            content: '标题6';
        }

        .ql-snow .ql-picker.ql-font .ql-picker-label::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item::before {
            content: '标准字体';
        }
        .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
            content: '衬线字体';
        }
        .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
        .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
            content: '等宽字体';
        }
    }

</style>