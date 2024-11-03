import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
    },
    company: {
      type: String,
    },
    message: {
      type: String,
    },
    visible: {
      type: Boolean,
    },
    stars: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "reviews" }
);

const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);
export default Review;
