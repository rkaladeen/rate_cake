const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  ratings: {
    type: Number,
    required: [true, "Rating is required"],
    min: [1,"Choose a rating between 1 and 5"],
    max: [5,"Choose a rating between 1 and 5"]
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
    minlength: [10, "Comment must have at least 10 characters"]
  }
})

const CakeSchema = new mongoose.Schema({
  baker: {
    type: String,
    required: [true, "Baker name is required"],
    minlength: [3, "Baker name must have at least 3 characters"]

  },
  img_url: {
    type: String,
    required: [true, "Image url is required"],
    minlength: [3, "Image url must have at least 3 characters"]

  },
  reviews: [ReviewSchema]
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);