const { querySql } = require("../db");

function login(username, password) {
  const sql = `select * from admin_user where username='${username}' and password='${password}'`;
  return querySql(sql);
}

module.exports = {
  login,
};
