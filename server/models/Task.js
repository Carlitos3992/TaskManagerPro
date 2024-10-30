const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Done'], default: 'Not Started' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
