//Nancy Dungrani , Student Id - 200530960 , Date - 23th Feb 2024



const tasksData = require('../data/tasks.json');

exports.getAllTasks = () => {
    return tasksData.map(task => {
        return {
            taskId: task.taskId,
            title: task.title,
            status: task.status
        };
    });
};

exports.getAllAssignedTo = () => {
    return tasksData.map(task => task.assignedTo);
};

exports.getTasksGroupedByStatus = (status) => {
    const filteredTasks = tasksData.filter(task => task.status === status);
    
    if (filteredTasks.length === 0) {
        throw new Error('No tasks found for the specified status');
    }
    
    return filteredTasks;
};


exports.getTaskById = (taskId) => {
    return tasksData.find(task => task.taskId === parseInt(taskId));
};

exports.getTasksByUser = (username) => {
    return tasksData.filter(task => task.assignedTo === username);
};
