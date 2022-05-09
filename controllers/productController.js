
const db=require("../models");

const Product=db.product;
const Reviews=db.reviews;

// add product

const addProduct= async (req,res)=>{
    let product=await Product.create(
        {title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            published:req.body.published
        })
    res.status(200).send(product)
}
//get all products


const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)
    

}

//get one products
const getOneProduct=async(req,res)=>{
    let id=req.params.id;
    let products= await Product.findOne({where:{id:id}})

    res.status(200).send(products)
};

//update products
const updateProducts=async(req,res)=>{
    let {id}=req.params;
    let products= await Product.update(req.body,{where:{id:id}})

    res.status(200).send(products)
};

//delete products
const deleteProducts=async(req,res)=>{
    let id=req.params.id;
    await Product.destroy({where:{id:id}})

    res.status(200).send("product is deleted");
};

//get published products
const getPulishedProducts= async (req,res)=>{

    let products= await Product.findAll({where:{published:true}})
    
    res.status(200).send(products)
}


module.exports={
    addProduct,
    getAllProducts,
    getOneProduct,
    getPulishedProducts,
    deleteProducts,
    updateProducts
}