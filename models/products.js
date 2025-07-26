const mongoose =require('mongoose');
// creating schema for the product
const productSchema = mongoose.Schema(
    {
        name_of_Product:{
            type: String,
            required:[true,"Please enter the product name"]
        },
        Product_type:{
            type:String,
            required : true
        },
        Manufacturer:{
            type:String,
            required:[true,"Please enter the manufacturer name"]
        },
        imported_from:{
            type: String,
            required:[true,"Please enter the country name"]
        },
        Product_quantity:{
            type: Number,
            required:true,
            default: 0
        },
        Product_price:{
            type: Number,
            required:true,
            default: 0 
        },
        Product_color:{
            type: String,
            required:[true,"Please enter the color of the product"]
        }
    },{
       timestamps:true  // gives the date and time of creation 
    }
)

const Product = mongoose.model("Products",productSchema)
module.exports = Product;