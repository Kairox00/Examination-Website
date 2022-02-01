const controller = require('../controller/choice');

const express = require('express');
const router = express.Router({mergeParams: true});

router.route('/')
.get(controller.getAllChoices)
.post(controller.createChoice);

router.route('/:chno')
.get(controller.getChoice)
.put(controller.updateChoice)
.delete(controller.deleteChoice);

module.exports = router;