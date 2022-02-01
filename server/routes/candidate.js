const controller = require('../controller/candidate');

const express = require('express');
const router = express.Router();

router.route('/')
.get(controller.getAllCandidates)
.post(controller.createCandidate);


router.route('/:id')
.get(controller.getCandidate)
.put(controller.updateCandidate)
.delete(controller.deleteCandidate);

router.route('/:id/exam')
.get(controller.getExams);

router.route('/:id/exam/:examId')
.get(controller.getExamAnswers)
.post(controller.addExamAnswers);

router.route('/:id/exam/:examId/grade')
.get(controller.getGrade);

router.route('/:id/exam/:examId/question/:qNo')
.get(controller.getQuestionAnswer)
.post(controller.addQuestionAnswer)


module.exports = router;