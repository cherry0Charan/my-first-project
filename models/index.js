require('dotenv').config()

const {Sequelize,DataTypes}=require("sequelize");

const sequelize=new Sequelize(process.env.DB_DATA,process.env.DB_USER,process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_dialect
    })



let db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.product=require("./productModels")(sequelize,DataTypes);
db.user=require("./userModel")(sequelize,DataTypes);

db.sequelize
.sync({force:true})
.then(()=>{
      
})
module.exports=db;