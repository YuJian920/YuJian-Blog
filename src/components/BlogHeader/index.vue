<template>
  <div class="BlogHeader">
    <div class="HeaderLogo">YuJianBlog</div>
    <div class="HeaderMenu">
      <a href="#">HOME</a>
      <a href="#">ABOUT</a>
      <a href="#">ARCHIVE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogHeader"
};
</script>

<style scoped>
.BlogHeader {
  display: grid;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  grid-template-columns: 130px 300px;
  grid-template-rows: 60px;
  background-color: #ffffff;
}
.HeaderMenu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100%;
}
</style>
