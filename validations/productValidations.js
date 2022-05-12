const Joi=require("joi");

class validations{
     productValidation={
        crateOrUpdateProductValidator:{
            body:Joi.object({
                title:Joi.string(),
                price:Joi.number(),
                description:Joi.string().optional(),
                published:Joi.boolean()
            })
        }
    }
    
     userValidation={
        createOrUpdateUserValidation:{
            body:Joi.object({
                username:Joi.string(),
                mail:Joi.string(),
                password:Joi.string().alphanum().min(8).max(16)
            })
        }
    }
}





module.exports=new validations;