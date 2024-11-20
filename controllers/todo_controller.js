const todoModel = require("../models/todo_models");

exports.todoCreate = (req, res, next) => {
    todoModel.create(req.body);
    res.status(201).send();
};
