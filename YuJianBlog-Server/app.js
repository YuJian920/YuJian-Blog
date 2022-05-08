const Koa = require("koa");
const cors = require("@koa/cors");
const parser = require("koa-bodyparser");
const catchError = require("./middlewares/catchError");
const { PORT } = require("./utils/config");

const app = new Koa();
app.use(catchError);
app.use(cors());
app.use(parser());

// import Router
app.use(require("./router/user").routes());
app.use(require("./router/article").routes());
app.use(require("./router/blogCustom").routes());

app.listen(PORT);
console.log("The Simple Blog Server is Running in", `http://localhost:${PORT}`);
