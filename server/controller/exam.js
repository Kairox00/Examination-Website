const Exam = require("../models/Exam");

const getAllExams = (async (req,res,next)=>{
    try{
       const [result] = await Exam.findAll();
       res.status(200).send(result);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const getExam = (async (req,res,next)=>{
    try{
       const [result] = await Exam.findById(req.params.id);
       res.status(200).send(result[0]);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const createExam = (async(req,res)=>{
    try{
        console.log(req.body);
        const newExam = new Exam(req.body.Duration, req.body.Date, req.body.StartTime, req.body.DueTime, req.body.GradeMax, req.body.ExaminerID);
        const result = await newExam.save();
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
})

const updateExam = (async (req,res)=>{
    try{
        // const [result] = await Exam.findById(req.params.id);
        // const ExamFound = result[0];

        const queryObj = {
           Duration: req.body.Duration, 
           Date: req.body.Date, 
           StartTime: req.body.StartTime,
           DueTime: req.body.DueTime,
           GradeMax: req.body.GradeMax,
           ExaminerID: req.body.ExaminerID
        }
         const result = await Exam.findByIdAndUpdate(req.params.id,queryObj);
         res.send(result);
    }
    catch(err){
        throw err;
    }
});

const deleteExam = async(req,res)=>{
    try{
        const result = await Exam.findByIdAndDelete(req.params.id);
        res.send(result);
    }
    catch(err){
        throw err
    }
}



module.exports = {
    getAllExams,
    getExam,
    createExam,
    updateExam,
    deleteExam
}