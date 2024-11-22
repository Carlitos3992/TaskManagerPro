const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Done'],
      required: true,
    },
    assignedTo: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema);
