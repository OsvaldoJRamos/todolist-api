const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);
router.post("/task", tasksMiddleware.validateBody, tasksController.createTask);
router.delete("/task/:id", tasksController.deleteTask);
router.put("/task/:id", tasksController.updateTask);

module.exports = router;