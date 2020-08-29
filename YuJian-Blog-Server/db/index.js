const config = require("./config");
const mysql = require("mysql");
const { DebugMode } = require("../utils/constant");
const { resolve } = require("path");
const { rejects } = require("assert");

function connect() {
  return mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
  });
}

function querySql(sql) {
  DebugMode && console.log("SQL", sql);
  const conn = connect();
  // 返回Promise对象
  return new Promise((resolve, rejects) => {
    // try&catch捕捉异常
    try {
      // 执行sql查询
      conn.query(sql, (error, results) => {
        if (error) {
          rejects(error);
        } else {
          resolve(results);
        }
      });
    } catch (e) {
      rejects(e);
    } finally {
      conn.end();
    }
  });
}

function queryOne(sql) {
  return new Promise((resolve, reject) => {
    querySql(sql)
      .then((results) => {
        if (results && results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  querySql,
  queryOne,
};
