const Question = require("../models/Question");

const getAllQuestions = (async (req,res,next)=>{
    try{
       const [result] = await Question.findAll();
       res.status(200).send(result);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const getQuestion = (async (req,res,next)=>{
    try{
       const [result] = await Question.findById(req.params.qno,req.params.id);
       res.status(200).send(result[0]);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const createQuestion = (async(req,res)=>{
    try{
        console.log(req.body);
        const newQuestion = new Question(req.body.QuestionNumber,req.params.id,req.body.Text,req.body.CorrectAnswer,req.body.Weight);
        const result = await newQuestion.save();
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
})

const updateQuestion = (async (req,res)=>{
    try{
        const queryObj = {
           Text: req.body.Text,
           CorrectAnswer: req.body.CorrectAnswer,
           Weight: req.body.Weight
        }
        const result = await Question.findByIdAndUpdate(req.params.qno, req.params.id, queryObj);
        res.send(result);
    }
    catch(err){
        throw err;
    }
});

const deleteQuestion = async(req,res)=>{
    try{
        const result = await Question.findByIdAndDelete(req.params.qno,req.params.id);
        res.send(result);
    }
    catch(err){
        throw err
    }
}



module.exports = {
    getAllQuestions,
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
}