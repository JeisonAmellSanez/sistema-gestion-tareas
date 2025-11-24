const TaskModel = require('../models/taskModel');

// Get all tasks
const getAllTasks = (req, res) => {
  try {
    const { status, priority } = req.query;
    let tasks;

    if (status) {
      tasks = TaskModel.getByStatus(status);
    } else if (priority) {
      tasks = TaskModel.getByPriority(priority);
    } else {
      tasks = TaskModel.getAll();
    }

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching tasks',
      error: error.message
    });
  }
};

// Get single task by ID
const getTaskById = (req, res) => {
  try {
    const task = TaskModel.getById(req.params.id);
    
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching task',
      error: error.message
    });
  }
};

// Create new task
const createTask = (req, res) => {
  try {
    const { title, description, status, priority } = req.body;

    // Validation
    if (!title || title.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }

    const task = TaskModel.create({
      title,
      description: description || '',
      status: status || 'pending',
      priority: priority || 'medium'
    });

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating task',
      error: error.message
    });
  }
};

// Update task
const updateTask = (req, res) => {
  try {
    const { title, description, status, priority } = req.body;

    const updatedTask = TaskModel.update(req.params.id, {
      title,
      description,
      status,
      priority
    });

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: updatedTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating task',
      error: error.message
    });
  }
};

// Delete task
const deleteTask = (req, res) => {
  try {
    const deleted = TaskModel.delete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting task',
      error: error.message
    });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
