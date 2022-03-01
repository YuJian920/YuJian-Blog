const Koa = require("koa");
const cors = require("@koa/cors");
const { PORT } = require("./utils/config");

const app = new Koa();
app.use(cors());
// import Router
app.use(require("./router/article").routes());

app.listen(PORT);
console.log("The Simple Http Server is Running in", `http://localhost:${PORT}`);
