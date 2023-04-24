const sequelize = require('../Models');
const initModels = require('../Models/init-models');
const models=initModels(sequelize);
const { successCode, failCode, errorCode } = require('../ultils/response');

//GET method => list of like_res
const getResLike = async (req, res) => {
    try {           
        let data = await models.like_res.findAll({
            include:["re","user"],
        });   
        // res.status(200).send(data);
        successCode(res,"Lấy dữ liệu thành công",data);
        
    } 
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res,"Lỗi BE");
    }
}
//POST method => like restaurant
const likeRes = async (req, res) => {
    try {           
        const {res_id,user_id}=req.params;         
        const now=new Date();
        let newData={
            user_id,
            res_id,            
            date_like:now
        }
       
        let data = await models.like_res.create(newData);          
        successCode(res,"Đã thích nhà hàng thành công",data);
        
    } 
    catch (err) {       
        errorCode(res,"Lỗi BE");
    }
}
//DELETE method => unlike restaurant
const unlikeRes = async (req, res) => {
    try {           
        const {res_id,user_id}=req.params;       
        await models.like_res.destroy({
            where:{
                res_id,
                user_id
            }
        }
        );          
        successCode(res,"Đã bỏ thích nhà hàng thành công");
        
    } 
    catch (err) {       
        errorCode(res,"Lỗi BE");
    }
}

//GET method => get list of liker by restaurant
const getLikeByRes = async (req, res) => {
    try {           
        let data = await models.restaurant.findAll({
            include:["user_id_users"],
        });   
        // res.status(200).send(data);
        successCode(res,"Lấy dữ liệu thành công",data);
        
    } 
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res,"Lỗi BE");
    }
}
//POST method => rate for restaurant
const rateRes = async (req, res) => {
    try {           
        const {res_id,user_id}=req.params;  
        const {amount}=req.body;      
        const now=new Date();
        let newData={
            user_id,
            res_id, 
            amount,           
            date_like:now
        }       
        let data = await models.rate_res.create(newData);          
        successCode(res,"Đã thêm đánh giá nhà hàng thành công",data);        
    } 
    catch (err) {       
        errorCode(res,"Lỗi BE");
    }
}

//GET method => get list of rater by restaurant
const getRateByRes = async (req, res) => {
    try {           
        let data = await models.restaurant.findAll({
            include:["user_id_user_rate_res"],
        });   
        // res.status(200).send(data);
        successCode(res,"Lấy dữ liệu thành công",data);
        
    } 
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res,"Lỗi BE");
    }
}
module.exports = {
    getResLike,
    likeRes,
    unlikeRes,
    getLikeByRes,
    rateRes,
    getRateByRes
   
}