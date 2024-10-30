// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Parses JSON bodies
app.use(cors()); // Allows cross-origin requests

// Connect to MongoDB
connectDB();

// Import Routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
