const Question = require('../models/questionModel');


// POST
exports.createQuestion = async (req, res) => {
    try {
      const { text, image_url, code, options, correct_option, subject_id, karma, created_by, quiz_id } = req.body;
      const question = await Question.create({ text, image_url, code, options, correct_option, subject_id, karma, created_by, quiz_id });
      return res.status(201).json(question);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // GET all
  exports.getAllQuestions = async (req, res) => {
    try {
      const questions = await Question.findAll();
      return res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Get by id
  exports.getQuestionById = async (req, res) => {
    try {
      const questionId = req.params.id;
      const question = await Question.findByPk(questionId);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      return res.status(200).json(question);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // PUT
  exports.updateQuestion = async (req, res) => {
    try {
      const questionId = req.params.id;
      const { text, image_url, code, options, correct_option, subject_id, karma, created_by, quiz_id } = req.body;
      const question = await Question.findByPk(questionId);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      question.text = text;
      question.image_url = image_url;
      question.code = code;
      question.options = options;
      question.correct_option = correct_option;
      question.subject_id = subject_id;
      question.karma = karma;
      question.created_by = created_by;
      question.quiz_id = quiz_id;
  
      await question.save();
      return res.status(200).json(question);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // DELETE
  exports.deleteQuestion = async (req, res) => {
    try {
      const questionId = req.params.id;
      const question = await Question.findByPk(questionId);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      await question.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  