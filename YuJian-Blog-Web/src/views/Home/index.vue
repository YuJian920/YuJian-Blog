<template>
  <div class="Index">
    <blog-header />
    <index-top :TopInfo="TopInfo" />
    <Article />
    <Footer />
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import IndexTop from "@/components/Top";
import Article from "./components/Article";
import Footer from "@/components/Footer";

export default {
  name: "Index",
  data() {
    return {
      TopInfo: {
        title: "YuJian",
        ArticleCover: "@/assets/images/test.png"
      }
    };
  },
  components: {
    BlogHeader,
    IndexTop,
    Article,
    Footer
  }
};
</script>

<style>
html {
  height: 100%;
  /* background-image: url(../../assets/images/bak.svg);
  background-position: center; */
}
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
