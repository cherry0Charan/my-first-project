const dbConfig=require("../config/dbconfig");

const {Sequelize,DataTypes}=require("sequelize");

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect
    })

sequelize.authenticate()
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})

let db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.product=require("./productModels")(sequelize,DataTypes);
db.reviews=require("./reviewModel")(sequelize,DataTypes);

db.sequelize
.sync({force:true})
.then(()=>{
    console.log("reacreate")  
})
module.exports=db;