const Subject = require('../models/subjectModel');


//POST
exports.createSubject = async (req, res) => {
  try {
    const { name, added_by, subject_description } = req.body;
    const subject = await Subject.create({ name, added_by, subject_description });
    return res.status(201).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All Subjects
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    return res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get Subject by ID
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



// Delete Subject
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




/*
// Update Subject
exports.updateSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const { name, added_by, subject_description } = req.body;
    const subject = await Subject.findByPk(subjectId);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    subject.name = name;
    subject.added_by = added_by;
    subject.subject_description = subject_description;

    await subject.save();
    return res.status(200).json(subject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
*/