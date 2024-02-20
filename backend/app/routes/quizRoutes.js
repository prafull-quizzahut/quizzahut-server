const express = require('express');
const router = express.Router();

//import quizController
const quizController = require('../controllers/quizController');

//Quiz Routes

router.post('/quizzes', quizController.createQuiz);
router.get('/quizzes', quizController.getAllQuizzes);
router.get('/quizzes/:id', quizController.getQuizById);
router.put('/quizzes/:id', quizController.updateQuiz);
router.delete('/quizzes/:id', quizController.deleteQuiz);

module.exports = router;

