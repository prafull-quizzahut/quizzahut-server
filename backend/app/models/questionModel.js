const { DataTypes } = require('sequelize');

const sequelize = require('../utils/db');

const User = require('./userModel');
const Quiz =  require('./quizModel');

//Question model
const Question = sequelize.define('Question', {
    question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.TEXT
    },
    image_url: {
        type: DataTypes.STRING(255)
    },
    code: {
        type: DataTypes.TEXT
    },
    options: {
        type: DataTypes.TEXT
    },
    correct_option: {
        type: DataTypes.STRING(10)
    },
    subject_id: {
        type: DataTypes.STRING(50)
    },
    karma: {
        type: DataTypes.INTEGER
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    created_by: {
        type: DataTypes.INTEGER
    },
    quiz_id: {
        type: DataTypes.INTEGER
    }
});

// Define foreign key constraints
Question.belongsTo(User, { foreignKey: 'created_by' });
Question.belongsTo(Quiz, { foreignKey: 'quiz_id' });