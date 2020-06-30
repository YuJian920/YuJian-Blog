const express = require("express");
const boom = require("boom");

const userRouter = require("./user");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome Server");
});

router.use("/user", userRouter)

router.use((req, res, next) => {
  next(boom.notFound("API不存在"));
});

module.exports = router;
