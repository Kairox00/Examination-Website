const controller = require('../controller/Examiner');

const express = require('express');
const router = express.Router();

router.route('/')
.get(controller.getAllExaminers)
.post(controller.createExaminer);


router.route('/:id')
.get(controller.getExaminer)
.put(controller.updateExaminer)
.delete(controller.deleteExaminer);



module.exports = router;