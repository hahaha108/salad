<template>
    <div class="postlistitem">
    <el-row>
        <el-col :span="17">
        <div>
                <span>{{postIntro.title}}</span>
                <span>{{postIntro.intro}}</span>
        </div>
        </el-col>
        <el-col :span="6" :offset="1">
            <div>
                <el-image
                        style="width: 150px; height: 100px"
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
                        intro:"",
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

<style scoped>

</style>