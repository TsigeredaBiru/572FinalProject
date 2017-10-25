const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{useMongoClient:true});
const paymentSchema=new mongoose.Schema({
	
        paymentId:Number, 
        firstName: String,
        lastName: String,
        street: String,
        city: String,
        state: String,
         zip: String,
        amount: Number,
        token: Object,
        charge: Object
});

const Payments=mongoose.model('Payments',paymentSchema);

module.exports=Payments;