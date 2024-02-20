const Quiz = require('../models/quizModel');


// POST
exports.createQuiz = async (req, res) => {
  try {
    const { description, time, karma, created_by, subject_id } = req.body;
    const quiz = await Quiz.create({ description, time, karma, created_by, subject_id });
    return res.status(201).json(quiz);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET ALL
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    return res.status(200).json(quizzes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET Quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz_id = req.params.id;
    const quiz = await Quiz.findByPk(quiz_id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    return res.status(200).json(quiz);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// PUT
exports.updateQuiz = async (req, res) => {
  try {
    const quiz_id = req.params.id;
    const { description, time, karma, created_by, subject_id } = req.body;
    const quiz = await Quiz.findByPk(quiz_id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    quiz.description = description;
    quiz.time = time;
    quiz.karma = karma;
    quiz.created_by = created_by;
    quiz.subject_id = subject_id;

    await quiz.save();
    return res.status(200).json(quiz);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// DELETE
exports.deleteQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quiz.findByPk(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    await quiz.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
