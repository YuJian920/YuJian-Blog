<template>
  <div class="Article">
    <router-link
      :to="{ path: 'Article', query: { id: '000' } }"
      class="ArticleItem"
    >
      <div class="ArticleCover">
        <img class="ArticleCoverImg" src="@/assets/images/test.png" />
      </div>
      <div class="ArticleInfo">
        <div class="ArticleTitle">ArticleTest</div>
        <div class="ArticleCont">Anything for Article</div>
        <div class="ArticleData">2020.6.11</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Article"
};
</script>

<style>
.Article {
  display: grid;
  justify-content: center;
}
.ArticleItem {
  display: grid;
  grid-template-columns: 720px;
  grid-template-rows: 330px 100px;
  margin-top: 40px;
  border: 1px solid #757575;
  border-radius: 5px;
}
.ArticleCover {
  margin: 9px auto;
  /* border: 1px solid #000000; */
  width: 97%;
}
.ArticleCoverImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ArticleInfo {
  display: grid;
  grid-template-columns: 100%;
  margin: 0 auto 9px;
  width: 97%;
}
.ArticleTitle {
  font-size: 25px;
}
.ArticleCont {
  font-size: 18px;
}
.ArticleData {
  color: gray;
  font-size: 15px;
}
</style>
