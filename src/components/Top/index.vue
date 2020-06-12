<template>
  <div class="AnyTop">
    <div class="Top"></div>
    <div class="IndexFont">{{ TopInfo.title }}</div>
  </div>
</template>

<script>
export default {
  name: "IndexTop",
  props: {
    TopInfo: {
      type: Object,
      default: () => {}
    }
  }
  // mounted() {
  //   console.log(this.$refs.Top.fontSize);
  //   if (this.TopInfo.ArticleCover) {
  //     this.$refs.Top.backgroundImage = this.TopInfo.ArticleCover;
  //   }
  // }
};
</script>

<style>
.AnyTop {
  /* background-color: aqua; */
  position: relative;
  z-index: -2;
  height: 400px;
}
.Top {
  background-image: url(../../assets/images/lineart.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 1188px 219px;
  margin: -20px auto;
  height: 440px;
  max-width: 1280px;
  position: relative;
  z-index: -1;
}
.IndexFont {
  margin-top: -260px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  font-size: 50px;
}
</style>
