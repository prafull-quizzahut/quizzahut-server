const { DataTypes } = require('sequelize');

const sequelize = require('../utils/db');

const User = require('./userModel');
const Subject = require('./subjectModel');

//Quiz model
const Quiz = sequelize.define('Quiz', {
    quiz_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    created_by: {
        type: DataTypes.INTEGER
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    description: {
        type: DataTypes.TEXT
    },
    time: {
        type: DataTypes.INTEGER
    },
    karma: {
        type: DataTypes.INTEGER
    },
    subject_id: {
        type: DataTypes.INTEGER
    }
});

//set up a foreign key constraint for the created_by attribute to reference the user_id field of the User model.
Quiz.belongsTo(User, { foreignKey: 'created_by' });
Quiz.belongsTo(Subject, { foreignKey: 'subject_id' });


module.exports = Quiz;
