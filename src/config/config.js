
require('dotenv').config();
module.exports={
    db_host:process.env.DB_HOST,
    db_user:process.env.DB_USER,
    db_pass:process.env.DB_PASS,
    db_database:process.env.DB_DATABASE,
    db_port:process.env.DB_PORT,
    db_dialect:process.env.DB_DIALECT,
}



