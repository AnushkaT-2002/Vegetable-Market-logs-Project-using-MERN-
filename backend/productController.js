const { addListener } = require("process");
const Product=require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


//Create product-- Admin

exports.createProduct=catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        sucess:true,
        product,
    });
});


//Get All product
exports.getAllProducts=catchAsyncErrors(async(req,res)=>{


    const resultPerPage= 60;
    const productsCount=await Product.countDocuments();
    const apiFeature=new ApiFeatures(Product.find(),req.query).search().pagination(resultPerPage);
    const products= await apiFeature.query;

    res.status(200).json({ 
        sucess:true,
        products,
        productsCount,
    });
});


//Get Product Details

exports.getProductDetails=catchAsyncErrors(async(req,res,next)=>{
    const product= await Product.findById(req.params.id);

if(!product){
    return next(new ErrorHander("Product not found",404));
}
res.status(200).json({
    success:true,
    product,
 
});
});
    

//Update product--admin
exports.updateProduct = catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);
   
if(!product){
    return next(new ErrorHander("Product not found",404));
}
    
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    runValidators:true,
useFindAndModify:false
});
res.status(200).json({
    success:true,
    product,
});
});

//Delete Product
exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{

    const product=await Product.findById(req.params.id);
   
if(!product){
    return next(new ErrorHander("Product not found",404));
}
    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully",
    });
});
