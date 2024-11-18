const express = require('express');
const mongoose = require('mongoose');
const Task = require('../models/Task');
const router = express.Router();

// Create Task
router.post('/create', async (req, res) => {
  try {
    const { title, description, status, assignedTo } = req.body;

    if (!title || !status) {
      return res.status(400).json({ message: 'Title and status are required' });
    }

    const newTask = new Task({
      title,
      description,
      status,
      assignedTo,
    });

    await newTask.save();
    res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (error) {
    console.error('Error creating task:', error.message);
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
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Task ID' });
    }

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    console.error('Error updating task:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete Task
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Task ID' });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
