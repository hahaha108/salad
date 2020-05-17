<template>
  <div class="postdetail">
    <!--导航栏-->
    <TopMenu />

    <!-- 左边栏 -->
    <div :class="{leftcade:true,'leftcade-unfixed':flag,'leftcade-fixed':!flag}">
      <div class="likes">
        <div>
          <el-button circle>
            <i class="iconfont ic-icon_like_dropbox"></i>
          </el-button>
        </div>
        <div>
          <span>{{t_note.likes_count}}赞</span>
        </div>
      </div>
      <div class="zans">
        <div>
          <el-button circle>赏</el-button>
        </div>
        <div>
          <span>赞赏</span>
        </div>
      </div>
    </div>

    <div class="row">
      <el-row>
        <el-col :span="16">
          <div class="left-box">
            <PostPageItem :postItem="t_note"></PostPageItem>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="rigth-box"></div>
        </el-col>
      </el-row>
    </div>

    <!--Backtop 回到顶部-->
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import PostPageItem from "@/components/posts/PostPageItem.vue";

export default {
  data() {
    return {
      flag: true,
      t_note: {
        is_author: false,
        last_updated_at: 1586248910,
        public_title: "三生三世枕上书续写（12）入梵音谷",
        purchased: false,
        liked_note: false,
        comments_count: 23,
        free_content:
          "\u003cp\u003e高甜文！慎入！话不多说，开始了！\u003c/p\u003e\u003chr\u003e\u003cp\u003e帝君抱起凤九，一个仙遁就回到了小竹楼，帝君把凤九轻轻放在床上，卸去了自己的衣服用低沉的声音说“小白，就让你给滚滚再生个弟弟妹妹吧，这样或许我就不会去淋雨了”\u003c/p\u003e\u003cp\u003e凤九红着脸说“帝君你……”还没等凤九说完两人早已坦诚相见！东华既温柔又霸道的吻上了凤九的嘴唇，直到凤九喘不过气来，帝君才不舍的离开了她的嘴，帝君看着凤九挑挑眉说“小白，两百年了，你还不会在这种情况吸气呼气？”\u003c/p\u003e\u003cp\u003e凤九说“帝君，那两百年我又没有和你在一起，更没有和其他人在一起，我又怎么会学会”帝君笑着说“也对，也只能怪我咯”说罢又亲了上去。凤九想推开东华，但奈何凤九没帝君力气大，凤九被帝君亲的迷迷糊糊的，当帝君入她之时，凤九才被那痛感弄清醒，虽然有些疼，但很快就被舒服的感觉代替了。\u003c/p\u003e\u003cp\u003e春宵一刻，佳人在旁。这晚帝君又把折腾到了子夜。（哎呀我的妈羞死人了）\u003c/p\u003e\u003cp\u003e凤九睡到正午才微微睁开眼睛，缓缓抬起手摸了摸旁边的被子，说“嗯～有那么早起床了”\u003c/p\u003e\u003cp\u003e帝君从门外端了一碗粥进来，帝君看见凤九醒了，笑道“醒了？起来喝些粥吧”凤九撒娇道“嗯～我动不了”帝君走过去，扶起凤九，让她靠着自己怀里。\u003c/p\u003e\u003cp\u003e凤九看了看帝君心想：帝君都36万岁了，怎么精力还这么充沛，帝君当然知道凤九在想什么说“小白，明明是你自己体力不济好不好。”\u003c/p\u003e\u003cp\u003e凤九瞪了一眼帝君说“帝君你又对我用读心术”“小白就算我不用读心术我也能知道你在想什么。”\u003c/p\u003e\u003cp\u003e凤九又待在帝君怀里睡了一会儿，凤九睁开眼睛对帝君说“不如我们叫上连宋成玉一起去吧”“也好”\u003c/p\u003e\u003cp\u003e凤九就和帝君去找滚滚去了。\u003c/p\u003e\u003cp\u003e凤九和帝君去到桃林见到滚滚和折颜、白真一起聊天“滚滚”滚滚见凤九来了，就跑了过去，“娘亲你可算想起滚滚啦”\u003c/p\u003e\u003cp\u003e帝君说“滚滚，我带你去梵音谷玩好不好”滚滚问“梵音谷？好呀好呀”\u003c/p\u003e\u003cp\u003e\u003cb\u003e十天后 梵音谷\u003c/b\u003e\u003c/p\u003e\u003cp\u003e凤九、帝君等人来到了梵音谷，姬蘅见到滚滚问“这位是？”\u003c/p\u003e\u003cp\u003e成玉说“凤九与帝君的孩子”姬蘅捏了捏滚滚的脸笑道“真是可爱”燕池悟说“嗯，是很可爱，所以姬蘅我们也要抓紧时间咯”\u003c/p\u003e\u003cp\u003e姬蘅红着脸说“别闹”凤九成玉早已笑的肚子痛了，姬蘅走到凤九身边说“凤九，你看我们是不是要帮某人牵个红线啦”“嗯，加油啦”\u003c/p\u003e\u003cp\u003e然后众人就进入了梵音谷！\u003c/p\u003e\u003chr\u003e",
        voted_down: false,
        rewardable: true,
        show_paid_comment_tips: false,
        share_image_url:
          "https://upload-images.jianshu.io/upload_images/21183510-34a2fe83baa42dcc.jpg",
        slug: "d865cdf79c2c",
        user: {
          liked_by_user: false,
          following_count: 2013,
          gender: 2,
          slug: "328e2abba0e6",
          intro:
            "热巴、高伟光未来可期，人间美好\n勿动枕上书是底线、热巴高伟光是命！\n你们别动，也动不起",
          likes_count: 7222,
          nickname: "Dear深情的妍妍",
          badges: [
            {
              text: "日更20天",
              intro_url:
                "https://www.jianshu.com/mobile/campaign/day_by_day/join?utm_medium=badge",
              image_url:
                "https://upload.jianshu.io/user_badge/3c9007f3-89e8-459f-b658-12fddff86fdd",
              icon: "other"
            }
          ],
          total_fp_amount: "111915416076713148324",
          wordage: 110284,
          avatar:
            "https://upload.jianshu.io/users/upload_avatars/21183510/c04ba045-a776-432a-9440-81f20241f04a.jpg",
          id: 21183510,
          liked_user: false
        },
        likes_count: 102,
        paid_type: "free",
        show_ads: true,
        paid_content_accessible: false,
        total_fp_amount: "2326000000000000000",
        trial_open: false,
        reprintable: false,
        bookmarked: false,
        wordage: 882,
        featured_comments_count: 1,
        downvotes_count: 1,
        wangxin_trial_open: false,
        commentable: true,
        total_rewards_count: 0,
        id: 65777388,
        notebook: {
          name: ""
        },
        description:
          "高甜文！慎入！话不多说，开始了！ 帝君抱起凤九，一个仙遁就回到了小竹楼，帝君把凤九轻轻放在床上，卸去了自己的衣服用低沉的声音说“小白，就让你给滚滚再生个弟弟妹妹吧，这样或许我...",
        first_shared_at: 1585269423,
        views_count: 9598,
        notebook_id: 42565036
      }
    };
  },
  mounted() {
    // 动态判断左边框left值
    window.addEventListener("resize", () => {
      console.log("window.innerWidth:", window.innerWidth);
      if (window.innerWidth > 1200) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  },
  name: "PostDetail",
  components: {
    TopMenu,
    PostPageItem
  }
};
</script>

<style lang="scss" scoped>
.postdetail {
  background-color: #f9f9f9;
}
.leftcade {
  position: fixed;
  top: 216px;
  font-size: 14px;
  text-align:center;
  .zans{
    margin-top: 10px;
  }
}
.leftcade-unfixed {
  left: calc((100vw - 1000px) / 2 - 70px);
}
.leftcade-fixed {
  left: 30px;
}
.row {
  min-width: 1000px;
  max-width: 1000px;
  margin: 0 auto;
}
</style>