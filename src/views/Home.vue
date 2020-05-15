<template>
    <div class="home">
        <TopMenu choiceIndex="1"/>
        <el-row type="flex"
                justify="center">
            <el-col :span="10">
                <div class="left-box">
                    <div class="split-line"></div>
                    <div v-for="n in 10"
                         class="have-img"
                         :key="n">
                        <PostListItem :postIntro="t_post"></PostListItem>
                        <!-- <el-divider></el-divider> -->
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="right-box">
                    <div class="board">
                        <el-image style="width: 280px; height: 55px"
                                  src=""
                                  fit="fit"></el-image>
                        <el-image style="width: 280px; height: 55px"
                                  src=""
                                  fit="fit"></el-image>
                        <el-image style="width: 280px; height: 55px"
                                  src=""
                                  fit="fit"></el-image>
                        <el-image style="width: 280px; height: 55px"
                                  src=""
                                  fit="fit"></el-image>
                    </div>

                    <!-- 首页右侧 App 下载提示 -->
                    <router-link to="/downloadapp" id="index-aside-download-qrbox" class="download">
                        <img src="../assets/img/ewm.png" alt="Download index side qrcode" class="qrcode">
                        <div class="info">
                            <div class="title">下载简书手机App<i class="iconfont ic-link"></i></div>
                            <div class="description">随时随地发现和创作内容</div>
                        </div>
                    </router-link>



                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    // @ is an alias to /src
    import TopMenu from '@/components/TopMenu.vue'
    import PostListItem from '@/components/posts/PostListItem.vue'

    export default {
        data() {
            return {
                t_post: {
                    title: "14岁的儿子只想打游戏，不想上学了",
                    intro: "因为疫情，14岁的小儿子一直在奶奶家。学校上网课后，因为家中还有上高三的大儿子，就想着让他俩分开，等大的开学后再让小的回来。 没想到大的开学后，...",
                    url: "http://www.jianshu.com/p/ffd23fb959bf",
                    titleImageUrl: "https://upload-images.jianshu.io/upload_images/8357505-c230fde14725e459.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp",
                    jsz: 5.6,// 简书赞
                    author: {
                        name: "风中的糯米",
                        url: "https://www.jianshu.com/u/e24131359583"
                    },
                    commentNum: 16,
                    likes: 24,
                    views: 624,
                    admiration: 0
                }
            }
        },
        name: 'Home',
        components: {
            TopMenu,
            PostListItem
        }
    }
</script>
<style lang="scss">
    .split-line {
        margin: -5px 0 15px;
    }

    .have-img {
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: rgb(240, 240, 240);
        word-wrap: break-word;
    }

    .right-box {
        margin-left: 4.16667%;
    }

    .download {
        margin-bottom: 30px;
        padding: 10px 22px;
        width: 100%;
        border: 1px solid #f0f0f0;
        border-radius: 6px;
        background-color: #fff;
        float: left;
        .qrcode {
            width: 60px;
            height: 60px;
            opacity: .85;
            vertical-align: middle;
            border: 0;
        }
        .info {
            display: inline-block;
            vertical-align: middle;
            margin-left: 7px;
            .title {
                font-size: 15px;
                color: #333;
            }
            .description {
                margin-top: 4px;
                font-size: 13px;
                color: #999;
            }
        }
    }
</style>