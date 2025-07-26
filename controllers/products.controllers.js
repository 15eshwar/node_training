const Product = require('../models/products');

// used to retrive all the data from the DB
const getProducts =async (req ,res)=>{    // whenever await is used async must be included here
    try {
        const product= await Product.find({});
        res.status(200).json(product);
    
       } catch (error) {
        res.status(500).json({message: error.message}) 
       }
}

// used to retrive only the user specified data from DB
const getProduct =async (req ,res)=>{
    try {
        const {id}= req.params;
        const product= await Product.findById(id);
        res.status(200).json(product); 
       } catch (error) {
        res.status(500).json({message: error.message})
       }
}

// post all the item
const createProduct = async(req,res) =>{  
   try {
    const product= await Product.create(req.body)
    res.status(200).json(product);

   } catch (error) {
    res.status(500).json({message: error.message})
   } 
}

// update an item
 const updateProduct = async(req,res) =>{
     try {
        const {id}= req.params;
        const product= await Product.findByIdAndUpdate(id,req.body);
        if( ! product){
            return res.status(404).json({message:'Product not found'})
        }
        else{
            const updateProduct = await Product.findById(id);
            res.status(200).json(updateProduct);
        }       
       } catch (error) {
        res.status(500).json({message: error.message})
       }
}

//Delete an item
const deleteProduct = async(req,res) =>{
    try {
        const {id}= req.params;
        const product= await Product.findByIdAndDelete(id,req.body);
        if( ! product){
            return res.status(404).json({message:'Product not found'})
        }
            res.status(200).json({message:"Product deleted sucessfully"});
        
       } catch (error) {
        res.status(500).json({message: error.message})
       } }

module.exports ={
    getProducts,
    getProduct,
    updateProduct,
    createProduct,
    deleteProduct
}