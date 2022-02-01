const controller = require('../controller/question');

const express = require('express');
const router = express.Router({mergeParams: true});
const choiceRouter = require('./choice');

router.use('/:qno/choice',choiceRouter);

router.route('/')
.get(controller.getAllQuestions)
.post(controller.createQuestion);

router.route('/:qno')
.get(controller.getQuestion)
.put(controller.updateQuestion)
.delete(controller.deleteQuestion);

module.exports = router;