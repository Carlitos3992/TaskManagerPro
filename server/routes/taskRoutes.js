const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create Task
router.post('/create', async (req, res) => {
  try {
    const { title, description, status, assignedTo } = req.body;

    const newTask = new Task({
      title,
      description,
      status,
      assignedTo,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get All Tasks
router.get('/all', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update Task
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete Task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
