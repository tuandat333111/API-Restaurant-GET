const sequelize=require('../Models');
const initModels=require('../Models/init-models');
const models=initModels(sequelize);
const { successCode, failCode, errorCode } = require('../ultils/response');

//GET method => get list of like by restaurant
const getLikeByUser = async (req, res) => {
    try {           
        let data = await models.user.findAll({
            include:["res_id_restaurants"],
        });   
        // res.status(200).send(data);
        successCode(res,"Lấy dữ liệu thành công",data);
        
    } 
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res,"Lỗi BE");
    }
}
//GET method => get list of rate by user
const getRateByUser = async (req, res) => {
    try {           
        let data = await models.user.findAll({
            include:["res_id_restaurant_rate_res"],
        });   
        // res.status(200).send(data);
        successCode(res,"Lấy dữ liệu thành công",data);
        
    } 
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res,"Lỗi BE");
    }
}
//POST method => add order by user
const addOrderByUser=async(req,res)=>{
    try {         
        const{user_id,food_id}=res.params;
        const{amount}=res.body;
        let newData={
            user_id,
            food_id,
            amount,
        }  
        let data = await models.order.create(newData);   
        // res.status(200).send(data);
        successCode(res,"Lấy dữ liệu thành công",data);
        
    } 
    catch (err) {
        // res.status(500).send("Lỗi BE");
        errorCode(res,"Lỗi BE");
    }
}

module.exports={
    getLikeByUser,
    getRateByUser,
    addOrderByUser,
}