const express = require("express");
const {
  allTask,
  createTask,
  findOneTask,
  deleteTask,
  updateTask,
  login,
  signup,
} = require("../controllers/tasks");

const routes = express.Router();
routes.route("/signUp").post(signup);
routes.route("/signIn").post(login);
routes.route("/").get(allTask).post(createTask);
routes.route("/:id").get(findOneTask).delete(deleteTask).patch(updateTask);

module.exports = routes;
