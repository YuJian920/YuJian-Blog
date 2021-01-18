<template>
  <div class="EditorFather">
    <div ref="EditContent" style="margin-left: 70px"></div>
  </div>
</template>

<script>
import wangEditor from "wangeditor";

export default {
  name: "ArticleCreateEditor",
  date() {
    return {
      Editor: null,
      EditContentDate: {},
    };
  },
  props: {
    PropsEditContentDate: {
      type: String,
      default() {
        return "";
      },
    },
  },
  watch: {
    PropsEditContentDate() {
      this.EditContentDate = this.PropsEditContentDate;
      this.initEditor();
      this._setInitContent(this.EditContentDate);
    },
  },
  methods: {
    initEditor() {
      const EditContent = new wangEditor(this.$refs.EditContent);
      EditContent.config.zIndex = 0;
      this.Editor = EditContent;
      this._syncContent();
      EditContent.create();
    },
    _syncContent() {
      this.Editor.config.onchange = (html) => {
        this.EditContentDate = html;
        this.$emit("update:PropsEditContentDate", html);
      };
    },
    _setInitContent(content) {
      this.Editor.txt.html(content);
    },
  },
  mounted() {
    this.EditContentDate = this.PropsEditContentDate;
    // console.log("数据传递", this.PropsEditContentDate);
    this.initEditor();
    this._setInitContent(this.EditContentDate);
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.Editor.destroy();
    this.Editor = null;
  },
};
</script>

<style scoped>
.EditorFather {
  width: 90%;
}
</style>