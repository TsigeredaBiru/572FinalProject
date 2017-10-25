const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useMongoClient:true});

const productsSchema=new mongoose.Schema({
	id:Number,
	name:String,
	description:String,
	price:Number,
	condition:String,
	category:String
});

const Products=mongoose.model('Products',productsSchema);

module.exports=Products;