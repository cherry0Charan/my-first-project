const productApiCalls=require("../controllers/productController");
const userApicalls=require("../controllers/userController")

const router=require("express").Router();
const validations=require("../validations/productValidations");
const {validate}=require("express-validation");


router.post("/products/addProduct",validate(validations.productValidation.crateOrUpdateProductValidator),productApiCalls.addProduct);
router.get("/products/allProducts",productApiCalls.getAllProducts);
router.get("/products/published",productApiCalls.getPulishedProducts);

router.get("/products/:id",productApiCalls.getOneProduct);
router.put("/products/:id",validate(validations.productValidation.crateOrUpdateProductValidator),productApiCalls.updateProducts);
router.delete("/products/:id",productApiCalls.deleteProducts);



//userApicalls

router.post("/users/addUser",validate(validations.userValidation.createOrUpdateUserValidation),userApicalls.addUser)
router.get("/users/Users",userApicalls.getAllUsers)
router.get("/users/:id",userApicalls.getOneUser)
router.put("/users/:id",validate(validations.userValidation.createOrUpdateUserValidation),userApicalls.updateUser)
router.delete("/users/:id",userApicalls.deleteUser)


module.exports=router;