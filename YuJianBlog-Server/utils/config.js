const database = {};

module.exports = {
  PORT: 9200,
  CODE_SUCCESS: 0,
  CODE_ERROR: -1,
  CODE_TOKEN_EXPIRED: -2,
  PWD_SALT: "PWD_SALT",
  PRIVATE_KEY: "PRIVATE_KEY",
  JWT_EXPIRED: 60 * 60,
  database,
};
