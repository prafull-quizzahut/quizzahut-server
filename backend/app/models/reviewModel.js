// Importing Sequelize DataTypes
const { DataTypes } = require('sequelize');


const sequelize = require('../utils/db');

//Import User and Quiz Model
const User = require('./userModel');
const Quiz = require('./quizModel');

//Review model
const Review = sequelize.define('Review', {
    review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quiz_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    karma: {
        type: DataTypes.INTEGER
    }
});

// Define foreign key constraints
Review.belongsTo(User, { foreignKey: 'user_id' });
Review.belongsTo(Quiz, { foreignKey: 'quiz_id' });

module.exports = Review;
