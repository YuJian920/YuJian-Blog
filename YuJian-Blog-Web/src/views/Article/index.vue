<template>
  <div>
    <blog-header />
    <index-top :TopInfo="TopInfo" />
    <img class="ArticleMainCover" src="@/assets/images/test.png" />
    <div class="ArticleMain" v-html="TopInfo.content"></div>
    <Footer />
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import IndexTop from "@/components/Top";
import Footer from "@/components/Footer";

import { mapState } from "vuex";

export default {
  name: "Article",
  components: {
    BlogHeader,
    IndexTop,
    Footer,
  },
  data() {
    return {
      TopInfo: {
        title: "ArticleTest",
        content: "ArticleTest",
        ArticleCover: "@/assets/images/test.png",
      },
    };
  },
  computed: {
    ...mapState(["Article"]),
  },
  methods: {
    getArticleData() {
      this.$store.dispatch("fetchArticle").then(() => {
        this.TopInfo.title = this.Article[this.$route.query.id].title;
        this.TopInfo.content = this.Article[this.$route.query.id].content;
      });
    },
  },
  mounted() {
    this.getArticleData();
  },
};
</script>

<style>
.ArticleMainCover {
  display: flex;
  object-fit: cover;
  margin: 0 auto 20px;
  width: 800px;
}
.ArticleMain {
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #000000;
  width: 800px;
  padding: 15px 15px 15px 15px;
}
</style>
