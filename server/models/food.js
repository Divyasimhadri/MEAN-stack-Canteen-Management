const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const foodSchema=new Schema({
    name:String,
    price:String
});
module.exports=mongoose.model('food',foodSchema,'food');
