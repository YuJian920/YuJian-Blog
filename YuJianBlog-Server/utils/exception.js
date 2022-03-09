class Exception extends Error {
  constructor(code = -1, msg = "服务器出现错误", data = {}) {
    super();
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

class Success extends Exception {
  constructor(msg = "请求成功", data = {}) {
    super();
    this.code = 0;
    this.msg = msg;
    this.data = data;
  }
}

class Fail extends Exception {
  constructor(msg = "请求失败", data = {}) {
    super();
    this.code = -1;
    this.msg = msg;
    this.data = data;
  }
}

module.exports = { Exception, Success, Fail };
