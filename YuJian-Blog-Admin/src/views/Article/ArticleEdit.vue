<template>
  <div class="CreateFather">
    <el-form @submit.native.prevent="EditArticle" ref="form" :model="ArticleForm">
      <el-form-item label="文章名称">
        <el-input v-model="ArticleForm.title" class="ArticleTitleWidth"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="ArticleForm.content" style="width: 90%;"></el-input>
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

export default {
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
      // console.log(this.$route.params.id);
      this.ArticleForm.title = this.article[this.$route.params.id].title;
      this.ArticleForm.content = this.article[this.$route.params.id].content;
      // this.ArticleForm = this.article[this.$route.params.id];
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
.CreateFather {
  margin: 30px 0px 0px 30px;
  width: 100%;
}
.ArticleTitleWidth {
  width: 500px;
}
</style>