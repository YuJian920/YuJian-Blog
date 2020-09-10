const { querySql } = require("../db");

function GetArticleList() {
  const sql = "SELECT * FROM admin_article";
  return querySql(sql);
}

function AddArticle(title, content, author) {
  const sql = `INSERT INTO admin_article VALUES (NULL, '${title}', '${content}', 'YuJian', NULL);`;
  return querySql(sql);
}

function DeleteArticle(id) {
  const sql = `DELETE FROM admin_article WHERE admin_article.id = ${id}`;
  return querySql(sql);
}

function UpdataArticle(id, title, content) {
  const sql = `UPDATE admin_article SET title = '${title}', content = '${content}' WHERE admin_article.id = ${id};`;
  return querySql(sql);
}

module.exports = {
  GetArticleList,
  AddArticle,
  DeleteArticle,
  UpdataArticle
};
