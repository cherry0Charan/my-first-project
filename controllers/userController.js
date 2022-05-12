
const db=require("../models")

const Users=db.user

class userApicalls{

    addUser= async (req,res)=>{
        try{
            const user=await Users.create({username:req.body.username,mail:req.body.mail,password:req.body.password})
            res.status(200).send(user)
        }catch(error){
            console.log(error)
            res.send("error:",error)
        }
        
    }

    getAllUsers= async (req,res)=>{
        try{
            const users= await Users.findAll({})
            res.status(200).send(users)
        }catch(error){
            console.log(error)
            res.send("error :",error)
        }
    }
    
    
    getOneUser=async (req,res)=>{
        try{
            const user=await Users.findOne({where:{id:req.params.id}})
            res.status(200).send(user)
        }catch(error){
            console.log(error)
            res.send("error :",error)
        }
    }
    

    updateUser=async (req,res)=>{
        try{
            const user=await Users.update({username:req.body.username,mail:req.body.mail,password:req.body.password},
                {
                    where:{
                        id:req.params.id
                    }
                })
            res.status(200).send(user)

        }catch(error){
            console.log(error)
        }
    }

    deleteUser=async (req,res)=>{
        try{
            const user=await Users.destroy({where:{id:req.params.id}})
            res.send("user Deleted").status(200)
        }catch(error){
            console.log(error)
        }
    }


}

module.exports=new userApicalls