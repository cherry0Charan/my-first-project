module.exports=(sequelize,DataTypes)=>{
    const Reviews=sequelize.define("reviews",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        rating:{
            type:DataTypes.INTEGER,   
        },
        description:{
            type:DataTypes.TEXT
        },
    })
    return Reviews
}