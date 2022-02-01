const controller = require('../controller/exam');

const express = require('express');
const router = express.Router();
const questionsRouter = require('./questions');

router.use('/:id/question',questionsRouter);

router.route('/')
.get(controller.getAllExams)
.post(controller.createExam);

router.get('/new',(req,res)=>{
    res.render('createExam');
})

router.route('/:id')
.get(controller.getExam)
.put(controller.updateExam)
.delete(controller.deleteExam);



module.exports = router;