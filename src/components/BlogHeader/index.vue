<template>
  <div class="BlogHeader">
    <div class="HeaderLogo">
      <router-link to="/">YuJianBlog</router-link>
    </div>
    <div class="HeaderMenu">
      <router-link to="/">HOME</router-link>
      <router-link to="/About">ABOUT</router-link>
      <router-link to="/Archive">ARCHIVE</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogHeader"
};
</script>

<style>
.BlogHeader {
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: auto 300px;
  grid-template-rows: 60px;
  border-bottom: 1px solid #757575;
  background-color: #ffffff;
}
.HeaderLogo {
  display: grid;
  grid-template-columns: 130px auto;
  grid-template-rows: 100%;
  color: #000000;
}
.HeaderLogo a:hover {
  color: #0000ff;
}
.HeaderMenu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100%;
}
.HeaderMenu a:hover {
  color: #757575;
}
</style>
