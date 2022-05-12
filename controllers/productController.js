
const db=require("../models");

const Product=db.product;


// add product

class productApiCalls{

    addProduct= async (req,res)=>{

        try{
            let product=await Product.create(
                {title:req.body.title,
                    price:req.body.price,
                    description:req.body.description,
                    published:req.body.published
                })
            res.status(200).send(product)
        }catch(error){
            console.log(error)
            res.status(500).send({"error":error})
        }

        
    }
    //get all products
    
    
     getAllProducts = async (req, res) => {

        try{
            let products = await Product.findAll()
            res.send(products).status(200)
        }catch(error){
            console.log(err)
        }
    
        
        
    
    }
    
    //get one products
     getOneProduct=async(req,res)=>{
        try{
            let id=req.params.id;
            let products= await Product.findOne({where:{id:id}})
            res.status(200).send(products)

        }catch(error){
            console.log(error)

        }

        
    };
    
    //update products

    updateProducts=async(req,res)=>{
        try{
            let {id}=req.params;
            let products= await Product.update(req.body,{where:{id:id}})
            res.status(200).send("Product updated")
        }catch(error){
            console.log(error)
        }
        
    };
    
    //delete products
     deleteProducts=async(req,res)=>{
         try{
            let id=req.params.id;
            await Product.destroy({where:{id:id}})
            res.status(200).send("product is deleted");
         }catch(error){
             console.log(error)
         }
        
    };
    
    //get published products
     getPulishedProducts= async (req,res)=>{
    
        try{
            let products= await Product.findAll({where:{published:true}})
            res.status(200).send(products)

        }catch(err){

            console.log(error)
            res.status(500).send("error :",error)
        }
        
    }
    
}



module.exports=new productApiCalls