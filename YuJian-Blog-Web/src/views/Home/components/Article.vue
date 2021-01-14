<template>
  <div class="Article">
    <div v-for="(item, index) of ArticleDate" :key="item.id">
      <router-link
        :to="{ path: 'Article', query: { id: index } }"
        class="ArticleItem"
      >
        <div class="ArticleCover">
          <img class="ArticleCoverImg" src="@/assets/images/test.png" />
        </div>
        <div class="ArticleInfo">
          <div class="ArticleTitle">{{ item.title }}</div>
          <div class="ArticleCont">{{ item.content }}</div>
          <div class="ArticleData">{{ item.author }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Article",
  data() {
    return {
      ArticleDate: [],
    };
  },
  computed: {
    ...mapState(["Article"]),
  },
  methods: {
    fetchArticle() {
      this.$store.dispatch("fetchArticle").then(() => {
        this.ArticleDate = this.Article;
      });
    },
  },
  mounted() {
    this.fetchArticle();
  },
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
  grid-template-rows: 330px 110px;
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
  font-size: 15px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.ArticleData {
  color: gray;
  font-size: 15px;
}
</style>
