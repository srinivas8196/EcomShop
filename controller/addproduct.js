const productmodel = require("../models/product")

const newProduct = new productmodel({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    company: req.body.company,
    productimage:req.body.productimage
})

addproduct()

async function addproduct()
{
let result = await newProduct.save()
{
   res.send(result)
}
}


module.exports = addproduct;

// async function addproduct(req, res,next) {
//     let username = req.body.username;
//     let email = req.body.email;
//     let password = req.body.password;
//     let userdata = {
//         username: username,
//         email: email,
//         password:password
//     }
    
//     let resultData = new UserModel(userdata);
//     resultData.save().then(item => {
//         res.send("item added successfully")
//     }).catch((err) => {
//         console.log("error in adding data");
//     })
    

// }

// module.exports = RegisterUser;



// const newProduct = new Product({
//     id : req.body.id,
//     name: req.body.name,
//     category: req.body.category,
//     price: req.body.price,
//     subcategory: req.body.subcategory,
// })

// productSave()

// async function productSave()
// {
// let result = await newProduct.save()
// {
//    res.send(result)
// }