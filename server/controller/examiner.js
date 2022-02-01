const Examiner = require("../models/Examiner");

const getAllExaminers = (async (req,res,next)=>{
    try{
       const [result] = await Examiner.findAll();
       res.status(200).send(result);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const getExaminer = (async (req,res,next)=>{
    try{
       const [result] = await Examiner.findById(req.params.id);
       res.status(200).send(result[0]);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const createExaminer = (async(req,res)=>{
    try{
        const name = req.body.name;
        const email = req.body.Email;
        const password = req.body.Password;
        const newExaminer = new Examiner(name,email,password);
        const result = await newExaminer.save();
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
})

const updateExaminer = (async (req,res)=>{
    try{

        const queryObj = {
            name: req.body.name,
            Email: req.body.Email,
            Password: req.body.Password
        }
         const result = await Examiner.findByIdAndUpdate(req.params.id,queryObj);
         res.send(result);
    }
    catch(err){
        throw err;
    }
});

const deleteExaminer = async(req,res)=>{
    try{
        const result = await Examiner.findByIdAndDelete(req.params.id);
        res.send(result);
    }
    catch(err){
        throw err
    }
}



module.exports = {
    getAllExaminers,
    getExaminer,
    createExaminer,
    updateExaminer,
    deleteExaminer
}