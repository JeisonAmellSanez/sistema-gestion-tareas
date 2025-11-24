// In-memory task storage
let tasks = [];
let nextId = 1;

class Task {
  constructor(title, description, status = 'pending', priority = 'medium') {
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.status = status; // pending, in-progress, completed
    this.priority = priority; // low, medium, high
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}

// Task operations
const TaskModel = {
  // Get all tasks
  getAll: () => {
    return tasks;
  },

  // Get task by ID
  getById: (id) => {
    return tasks.find(task => task.id === parseInt(id));
  },

  // Create new task
  create: (taskData) => {
    const task = new Task(
      taskData.title,
      taskData.description,
      taskData.status,
      taskData.priority
    );
    tasks.push(task);
    return task;
  },

  // Update task
  update: (id, taskData) => {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) return null;

    const updatedTask = {
      ...tasks[index],
      ...taskData,
      id: tasks[index].id,
      createdAt: tasks[index].createdAt,
      updatedAt: new Date().toISOString()
    };

    tasks[index] = updatedTask;
    return updatedTask;
  },

  // Delete task
  delete: (id) => {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) return false;
    
    tasks.splice(index, 1);
    return true;
  },

  // Filter tasks by status
  getByStatus: (status) => {
    return tasks.filter(task => task.status === status);
  },

  // Filter tasks by priority
  getByPriority: (priority) => {
    return tasks.filter(task => task.priority === priority);
  }
};

module.exports = TaskModel;
