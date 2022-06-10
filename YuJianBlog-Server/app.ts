import Koa from "koa";
import cors from "@koa/cors";
import parser from "koa-bodyparser";
import catchError from "./middlewares/catchError";
import { PORT } from "./utils/config";

import userRouter from "./router/user";
import articleRouter from "./router/article";
import blogCustomRouter from "./router/blogCustom";

const app = new Koa();
app.use(catchError);
app.use(cors());
app.use(parser());

// import Router
app.use(userRouter.routes());
app.use(articleRouter.routes());
app.use(blogCustomRouter.routes());

app.listen(PORT);
console.log("The Simple Blog Server is Running in", `http://localhost:${PORT}`);
