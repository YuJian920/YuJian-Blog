<template>
  <div class="CreateFather">
    <el-form
      @submit.native.prevent="createArticle"
      ref="form"
      :model="ArticleForm"
    >
      <el-form-item label="文章名称">
        <el-input v-model="ArticleForm.title" class="ArticleTitleWidth" />
      </el-form-item>
      <el-form-item label="文章内容">
        <article-create-editor
          :PropsEditContentDate.sync="ArticleForm.content"
        />
        <!-- <el-form-item label="HTML"></el-form-item> -->
        <el-input
          v-model="ArticleForm.content"
          type="textarea"
          style="display: none"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { AddArticle } from "@/api/article";
import ArticleCreateEditor from "./ArticleCreateEditor";

export default {
  components: { ArticleCreateEditor },
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
      AddArticle(this.ArticleForm).then((res) => {
        if (res.code === 0) {
          this.$message({
            message: res.msg,
            type: "success",
          });
          this.$router.push("/Article/List");
        } else {
          this.$message.error(res.msg);
        }
      });
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