const Review = require('../models/reviewModel');

// Create Review
exports.createReview = async (req, res) => {
  try {
    const { quiz_id, user_id, karma } = req.body;
    const review = await Review.create({ quiz_id, user_id, karma });
    return res.status(201).json(review);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All Reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    return res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get Review by ID
exports.getReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findByPk(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    return res.status(200).json(review);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Review
exports.updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { quiz_id, user_id, karma } = req.body;
    const review = await Review.findByPk(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    review.quiz_id = quiz_id;
    review.user_id = user_id;
    review.karma = karma;

    await review.save();
    return res.status(200).json(review);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Review
exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findByPk(reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    await review.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
