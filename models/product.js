const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


const b7shopdata = {
    productname: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity:{
        type:Number,
    },
    company:{
        type:Number,
    },
    productimage:{
        type:String,
    },
  };
// const Products  = new Schema({
 
//    productname: String,
//    price: Number,
//    quantity: Number,
//    company: String,
//    productimage: String,
   
// });

const productmodel = mongoose.model('Productmodel',b7shopdata);
module.exports = productmodel;