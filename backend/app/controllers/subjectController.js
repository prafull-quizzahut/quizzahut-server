const Subject = require('../models/subjectModel');

exports.createSubject = async (req, res) => {
  try {
    const { name } = req.body;
    const subject = await Subject.create({ name });
    return res.status(201).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    return res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    return res.status(200).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const { name } = req.body;
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    subject.name = name;
    await subject.save();
    return res.status(200).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    await subject.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
const Subject = require('../models/subjectModel');

exports.createSubject = async (req, res) => {
  try {
    const { name } = req.body;
    const subject = await Subject.create({ name });
    return res.status(201).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    return res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    return res.status(200).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const { name } = req.body;
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    subject.name = name;
    await subject.save();
    return res.status(200).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    await subject.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
