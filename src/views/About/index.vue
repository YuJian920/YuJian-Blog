<template>
  <div>
    <blog-header />
    <index-top :TopInfo="TopInfo" />
    <Article />
    <Footer />
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";
import IndexTop from "@/components/Top";
import Footer from "@/components/Footer";

export default {
  name: "About",
  components: {
    BlogHeader,
    IndexTop,
    Footer
  },
  data() {
    return {
      TopInfo: {
        title: "About Me"
      }
    };
  },
};
</script>
