<template>
  <div class="ListFather">
    <el-table
      :data="ArticleData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="文章标题" prop="title"></el-table-column>
      <el-table-column label="文章作者" prop="author"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "ArticleList",
  data() {
    return {
      ArticleData: [],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["article"]),
  },
  methods: {

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  mounted() {
    this.$store.dispatch("article/getArticle").then(() => {
      this.ArticleData = this.article;
    });
  },
};
</script>
<style scoped>
</style>