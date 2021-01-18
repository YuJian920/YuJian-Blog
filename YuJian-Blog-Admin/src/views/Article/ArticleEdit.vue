<template>
  <div class="EditFather">
    <el-form
      @submit.native.prevent="EditArticle"
      ref="form"
      :model="ArticleForm"
    >
      <el-form-item label="文章名称">
        <el-input
          v-model="ArticleForm.title"
          class="ArticleTitleWidth"
        ></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <article-create-editor
          :PropsEditContentDate.sync="ArticleForm.content"
        />
        <el-input
          type="textarea"
          v-model="ArticleForm.content"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UpdataArticle } from "@/api/article";
import ArticleCreateEditor from "./ArticleCreateEditor";

export default {
  components: { ArticleCreateEditor },
  name: "ArticleEdit",
  data() {
    return {
      ArticleForm: {
        title: "",
        content: "",
      },
    };
  },
  computed: {
    ...mapGetters(["article"]),
  },
  methods: {
    fetchArticle() {
      this.$store.dispatch("article/getArticle").then(() => {
        this.ArticleForm.title = this.article[this.$route.params.id].title;
        this.ArticleForm.content = this.article[this.$route.params.id].content;
      });
    },
    EditArticle() {
      UpdataArticle(
        this.article[this.$route.params.id].id,
        this.ArticleForm
      ).then((res) => {
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
  created() {
    this.fetchArticle();
  },
};
</script>
<style scoped>
.EditFather {
  margin: 30px 0px 0px 30px;
  width: 100%;
}
.ArticleTitleWidth {
  width: 500px;
}
</style>