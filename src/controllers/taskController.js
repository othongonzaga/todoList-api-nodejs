const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.taskId);
    res.json({ message: 'Tarefa excluída com sucesso' });
  } catch (error) {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
};
