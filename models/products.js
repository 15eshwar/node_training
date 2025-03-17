const mongoose =require('mongoose');
// creating schema for the product

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true,"Please enter the product name"]
        },
        quantity:{
            type: Number,
            required:true,
            default: 0
        },
        price:{
            type: Number,
            required:true,
            default: 0 
        }
    },{
       timestamps:true  // gives the date and time of creation 
    }
)


const Product = mongoose.model("Products",productSchema)

module.exports = Product;