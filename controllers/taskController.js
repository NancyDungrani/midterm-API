//Nancy Dungrani , Student Id - 200530960 , Date - 23th Feb 2024

const taskModel = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();
    res.json(tasks);
};

exports.getAllAssignedTo = (req, res) => {
    const assignedTo = [...new Set(taskModel.getAllAssignedTo())];
    res.json(assignedTo);
};

exports.getTasksGroupedByStatus = (req, res) => {
    
    const status = req.params.status;
 
    const tasks = taskModel.getTasksGroupedByStatus(status);

    if (!tasks || tasks.length === 0) {
        return res.status(404).json({ error: 'No tasks found for the specified status' });
    }

    return res.json(tasks);
};

exports.getTaskById = (req, res) => {
    const taskId = req.params.taskId;
    
    const task = taskModel.getTaskById(taskId);
    console.log(task)
    res.json(task);
};

exports.getTasksByUser = (req, res) => {
    const username = req.params.username;
    const tasks = taskModel.getTasksByUser(username);
    res.json(tasks);
};
