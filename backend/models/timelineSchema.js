import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title required!"],
  },
  description: {
    type: String,
    required: [true, "Description required!"],
  },
  timeline: {
    from: {
      type: String,
      required: [true, "Timeline starting date is required"],
    },
    to: {
      type: String,
      required: [true, "Timeline ending date is required"],
    },
  },
});

export const Timeline = mongoose.model("Timeline", timelineSchema);
