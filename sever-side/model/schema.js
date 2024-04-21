const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["TODO", "IN_PROGRESS", "COMPLETED"],
    default: "TODO",
  },
  dueDate: Date,
  // Reference to the user who owns this task
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    maxLength: [40, "name can not be more than 40 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "password must be at least 8 characters"],
  },
  task: [taskSchema],
});

module.exports = mongoose.model("user", userSchema);
