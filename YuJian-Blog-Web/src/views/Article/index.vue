<template>
  <div>
    <blog-header />
    <index-top :TopInfo="TopInfo" />
    <img class="ArticleMainCover" src="@/assets/images/test.png" />
    <div class="ArticleMain">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse
    </div>
    <Footer />
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import IndexTop from "@/components/Top";
import Footer from "@/components/Footer";

export default {
  name: "Article",
  components: {
    BlogHeader,
    IndexTop,
    Footer
  },
  data() {
    return {
      TopInfo: {
        title: "ArticleTest",
        ArticleCover: "@/assets/images/test.png"
      }
    };
  },
  methods: {
    getArticleData: function() {
      if (this.$route.query.id === "000") {
        this.TopTitle = "ArticleTest";
      }
    }
  },
  beforeMount() {
    this.getArticleData();
  }
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
  display: flex;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #000000;
  width: 800px;
  padding: 15px 15px 15px 15px;
}
</style>
