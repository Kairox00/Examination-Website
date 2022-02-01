const Candidate = require("../models/Candidate");

const getAllCandidates = (async (req,res,next)=>{
    try{
       const [result] = await Candidate.findAll();
       res.status(200).send(result);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const getCandidate = (async (req,res,next)=>{
    try{
       const [result] = await Candidate.findById(req.params.id);
       res.status(200).send(result[0]);
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode = 500;
        }
        throw err;
    }
});

const createCandidate = (async(req,res)=>{
    try{
        const fname = req.body.FirstName;
        const lname = req.body.LastName;
        const email = req.body.Email;
        const password = req.body.Password;
        const newCandidate = new Candidate(fname,lname,email,password);
        const result = await newCandidate.save();
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
})

const updateCandidate = (async (req,res)=>{
    try{
        // const [result] = await Candidate.findById(req.params.id);
        // const candidateFound = result[0];

        const queryObj = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password
        }
         const result = await Candidate.findByIdAndUpdate(req.params.id,queryObj);
         res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
});

const deleteCandidate = async(req,res)=>{
    try{
        const result = await Candidate.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
    }
    catch(err){
        throw err
    }
}

const getQuestionAnswer = async(req,res)=>{
    try{
        const [result] = await Candidate.findCandidateQuestionAnswer(req.params.id,req.params.examId,req.params.qNo);
        res.status(200).send(result[0]);
    }
    catch(err){
        throw err;
    }
}

const getExamAnswers = async(req,res)=>{
    try{
        const [result] = await Candidate.findCandidateExamAnswers(req.params.id,req.params.examId);
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
}

const addExamAnswers = async(req,res)=>{
    try{
        const answers = req.body.answers;
        console.log(req.body);
        for (const answer of answers){
            console.log(answer);
            const [result] = await Candidate.insertAnswer(req.params.id,req.params.examId,answer[0],answer[1]);
        }
        const result = await Candidate.setExamStatus(req.params.id,req.params.examId,true);
        res.status(200).send('success');
    }
    catch(err){
        throw err;
    }
}

const addQuestionAnswer = async(req,res)=>{
    try{
        const [result] = await Candidate.insertAnswer(req.params.id,req.params.examId,req.params.qNo,req.body.choNo);
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
}

const updateQuestionAnswer = async(req,res)=>{
     try{
        const [result] = await Candidate.insertAnswer(req.params.id,req.params.examId,req.params.qNo,req.body.choNo);
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
}

const getGrade = async(req,res)=>{
    try{
        let [result] = await Candidate.findExamGrade(req.params.id,req.params.examId);
        res.status(200).send(result[0]["SUM(q.Weight)"]);
    }
    catch(err){
        throw err;
    }
}

const getExams = async(req,res)=>{
    try{
        const [result] = await Candidate.findAllCandidateExams(req.params.id);
        res.status(200).send(result);
    }
    catch(err){
        throw err;
    }
}


module.exports = {
    getAllCandidates,
    getCandidate,
    createCandidate,
    updateCandidate,
    deleteCandidate,
    getQuestionAnswer,
    addQuestionAnswer,
    getExamAnswers,
    addExamAnswers,
    getGrade,
    getExams
}