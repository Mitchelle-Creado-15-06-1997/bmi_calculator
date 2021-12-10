var express = require('express');
var router = express.Router();
var BmiController = require('../controller/bmi.controller');

const bmiController = new BmiController();

router.post('/calculate-bmi', bmiController.bmiCalculator);

module.exports = router;