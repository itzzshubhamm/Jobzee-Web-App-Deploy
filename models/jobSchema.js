import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title !"],
    minLength: [3, "Title must contain at least 3 Characters !"],
    maxLength: [30, "Title cannot exceed 30 Characters !"],
  },
  description: {
    type: String,
    required: [true, "Please provide Job decription !"],
    minLength: [30, "Description must contain at least 30 Characters !"],
    maxLength: [500, "Description cannot exceed 500 Characters !"],
  },
  category: {
    type: String,
    required: [true, "Please provide a Job category !"],
  },
  country: {
    type: String,
    required: [true, "Please provide the country name !"],
  },
  city: {
    type: String,
    required: [true, "Please provide the city name !"],
  },
  location: {
    type: String,
    required: [true, "Please provide location !"],
    minLength: [20, "Location must contian at least 20 characters !"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed Salary must contain at least 4 digits"],
    maxLength: [9, "Fixed Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary from must contain at least 4 digits !"],
    maxLength: [9, "Salary from cannot exceed 9 digits !"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary to must contain at least 4 digits !"],
    maxLength: [9, "Salary to cannot exceed 9 digits !"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
