// Importing Sequelize DataTypes
const { DataTypes } = require('sequelize');

const sequelize = require('../utils/db');

// Importing the User model
const User = require('./userModel');

//Subject model
const Subject = sequelize.define('Subject', {
    subject_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50)
    },
    added_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    added_by: {
        type: DataTypes.INTEGER
    },
    subject_description: {
        type: DataTypes.TEXT
    }
});

// Define foreign key constraint for added_by referencing User(user_id)
Subject.belongsTo(User, { foreignKey: 'added_by' });

module.exports = Subject;
