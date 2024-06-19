/*import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const monumentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bannerImg: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  otherThings: { type: String, required: true },
  contributor: { type: String, required: true },
  contributorId: { type: String, required: true },
  images: { type: Array, default: [] }
});

const contributionSchema = new mongoose.Schema({
  monumentId: { type: String, required: true },
  contributor: { type: String, required: true },
  contributorId: { type: String, required: true },
  title: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  contribution: { type: String, required: true },
  date: { type: String, required: true }
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  bannerImg: { type: String, required: true }
});

export const User = mongoose.model("User", userSchema);
export const Monument = mongoose.model("Monument", monumentSchema);
export const Contribution = mongoose.model("Contribution", contributionSchema);
export const City = mongoose.model("City", citySchema); */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const monumentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bannerImg: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  otherThings: { type: String, required: true },
  contributor: { type: String, required: true },
  contributorId: { type: String, required: true },
  images: { type: [String], default: [] }
});

const contributionSchema = new mongoose.Schema({
  monumentId: { type: String, required: true },
  contributor: { type: String, required: true },
  contributorId: { type: String, required: true },
  title: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  contribution: { type: String, required: true },
  date: { type: String, required: true }
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  bannerImg: { type: String, required: true }
});

export const User = mongoose.model("User", userSchema);
export const Monument = mongoose.model("Monument", monumentSchema);
export const Contribution = mongoose.model("Contribution", contributionSchema);
export const City = mongoose.model("City", citySchema);
