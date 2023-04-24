const express = require('express');
const resRouter = require('./resRouter');
const userRouter=require('./userRouter');
const rootRouter = express.Router();

rootRouter.use("/res", resRouter);
rootRouter.use("/user",userRouter);


module.exports = rootRouter;