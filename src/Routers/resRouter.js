const express = require('express');
const resRouter = express.Router();

const { getResLike,likeRes,unlikeRes,getLikeByRes,rateRes,getRateByRes } = require('../Controllers/resController');

resRouter.get("/get-res-like",getResLike);
resRouter.post("/like-res/:res_id/:user_id",likeRes);
resRouter.delete("/unlike-res/:res_id/:user_id",unlikeRes);
resRouter.get("/get-like-by-res",getLikeByRes);

resRouter.post("/rate-res/:res_id/:user_id",rateRes);
resRouter.get("/get-rate-by-res",getRateByRes);
module.exports = resRouter;