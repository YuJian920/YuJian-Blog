const { Exception } = require("../utils/exception");

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof Exception) {
      ctx.body = {
        code: error.code,
        msg: error.msg,
        data: error.data,
      };
    } else {
      ctx.response.status = 500;
      ctx.body = {
        code: -1,
        msg: "系统错误",
        data: {
          path: `${ctx.method} ${ctx.path}`,
        },
      };
      console.log(error);
    }
  }
};

module.exports = catchError;
