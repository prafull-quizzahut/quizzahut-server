const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comment: {
    type: DataTypes.STRING(255)
  },
  rating: {
    type: DataTypes.INTEGER
  },
  // Add other fields as needed
});

module.exports = Review;
