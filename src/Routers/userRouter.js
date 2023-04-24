const express=require('express');
const userRouter=express.Router();
const {getLikeByUser,getRateByUser,addOrderByUser}=require('../Controllers/userController');

userRouter.get("/get-like-by-user",getLikeByUser);
userRouter.get("/get-rate-by-user",getRateByUser);
userRouter.post("/add-order/:food_id/:user_id",addOrderByUser)
module.exports=userRouter;  