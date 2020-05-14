<template>
    <div class="home">
        <TopMenu choiceIndex="1"/>
        <el-row type="flex" justify="center">
            <el-col :span="10">
        <div v-for="n in 10" :key="n">
            <PostListItem v-bind:postIntro="t_post"></PostListItem>
            <el-divider></el-divider>
        </div>
            </el-col>
            <el-col :span="4">
                <el-image
                        style="width: 280px; height: 55px"
                        src=""
                        fit="fit"></el-image>
                <el-image
                        style="width: 280px; height: 55px"
                        src=""
                        fit="fit"></el-image>
                <el-image
                        style="width: 280px; height: 55px"
                        src=""
                        fit="fit"></el-image>
                <el-image
                        style="width: 280px; height: 55px"
                        src=""
                        fit="fit"></el-image>

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
                    url: "https://www.jianshu.com/p/ffd23fb959bf",
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
