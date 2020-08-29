const { querySql } = require("../db");

function GetArticleList() {
  const sql = "SELECT * FROM admin_article";
  return querySql(sql);
}

function AddArticle(title, content, author){
  const sql = `INSERT INTO admin_article VALUES (NULL, '${title}', '${content}', 'YuJian', NULL);`
  return querySql(sql);
}

module.exports = {
  GetArticleList,
  AddArticle
};
