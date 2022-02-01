const Customer = require("../models/Customer");

const getAllCustomers = (async (req,res,next)=>{
    try{
       const [result] = await Customer.fetchAll();
       res.status(200).send(result);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const test = (req,res)=>{
    res.send('hello');
}

module.exports = {
    getAllCustomers,
    test
}