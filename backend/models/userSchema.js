import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name required"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number required"],
  },
  aboutMe: {
    type: String,
    required: [true, "About me field is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must contain 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  portfolioURL: {
    type: String,
    required: [true, "Portfolio URL is required"],
  },
  githubURL: String,
  instagramURL: String,
  facebookURL: String,
  twitterURL: String,
  linkedInURL: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

export const User = mongoose.model("User", userSchema);

export default User;
