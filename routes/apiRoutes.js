//Nancy Dungrani , Student Id - 200530960 , Date - 23th Feb 2024


const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks.json');
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getAllTasks);
router.get('/users', taskController.getAllAssignedTo);
router.get('/tasks/status/:status', taskController.getTasksGroupedByStatus);
router.get('/tasks/:taskId', taskController.getTaskById);
router.get('/user/:username', taskController.getTasksByUser);

// Creating a Task
router.post('/', (req, res) => {
    const { title, description, status, assignedTo } = req.body;
    const newTask = {
      taskId: tasks.length + 1,
      title,
      description,
      status,
      assignedTo
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });
  
  // Updating Task Status
  router.patch('/:taskId', (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body;
    const taskIndex = tasks.findIndex(task => task.taskId == taskId);
    if (taskIndex !== -1) {
      tasks[taskIndex].status = status;
      res.json(tasks[taskIndex]);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });

module.exports = router;
