const Choice = require("../models/Choice");

const getAllChoices = (async (req,res,next)=>{
    try{
       const [result] = await Choice.findAll();
       res.status(200).send(result);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const getChoice = (async (req,res,next)=>{
    try{
       const [result] = await Choice.findById(req.params.chno, req.params.qno, req.params.id);
       res.status(200).send(result[0]);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const createChoice = (async(req,res)=>{
    try{
        console.log(req.body);
        const newChoice = new Choice(req.params.qno, req.params.id, req.body.ChoiceNumber, req.body.Text);
        const result = await newChoice.save();
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
})

const updateChoice = (async (req,res)=>{
    try{
        const queryObj = {
           Text: req.body.Text,
        }
        const result = await Choice.findByIdAndUpdate(req.params.chno, req.params.qno, req.params.id, queryObj);
        res.send(result);
    }
    catch(err){
        throw err;
    }
});

const deleteChoice = async(req,res)=>{
    try{
        const result = await Choice.findByIdAndDelete(req.params.chno, req.params.qno, req.params.id);
        res.send(result);
    }
    catch(err){
        throw err
    }
}



module.exports = {
    getAllChoices,
    getChoice,
    createChoice,
    updateChoice,
    deleteChoice
}