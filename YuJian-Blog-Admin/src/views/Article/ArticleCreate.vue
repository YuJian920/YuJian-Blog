<template>
  <div class="CreateFather">
    <el-form @submit.native.prevent="createArticle" ref="form" :model="ArticleForm">
      <el-form-item label="文章名称">
        <el-input v-model="ArticleForm.title" class="ArticleTitleWidth"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="ArticleForm.content" style="width: 90%;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { AddArticle } from "@/api/article";

export default {
  name: "ArticleCreate",
  data() {
    return {
      ArticleForm: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    createArticle() {
      AddArticle(this.ArticleForm);
    },
  },
};
</script>
<style scoped>
.CreateFather {
  margin: 30px 0px 0px 30px;
  width: 100%;
}
.ArticleTitleWidth {
  width: 500px;
}
</style>