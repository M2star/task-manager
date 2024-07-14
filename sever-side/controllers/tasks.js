const Task = require("../model/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { identifier, password } = req.body;
  const user = await Task.findOne({ $or: [{ userName : identifier }, { email: identifier }] });
  if (!user) {
    return res.status(400).json({
      err: "user not found",
      msg: "user not found",
      resp_code: 400,
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      err: "invalid password",
      msg: "invalid password",
      resp_code: 400,
    });
  }
  const token = await jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "12h" }
  );

  res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Max-Age=43200; SameSite=Strict`);
  
  res.status(200).json({
    msg: "user login successful",
    resp_code: "200",
    response: {
      token: token,
      userName: user.userName,
      email: user.email,
    },
  });
};

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    console.log(userName, email, password);
    const existingUser = await Task.findOne({ $or: [{ userName }, { email }] });

    if (existingUser) {
      return res.status(400).json({
        err: "user already registered",
        msg: "user already registered",
        status: 501,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Task({
      userName,
      email,
      password: hashedPassword,
    });
    console.log(newUser.userName, newUser.email);
    newUser.save();
    const token = await jwt.sign(
      { id: newUser.userName, email: newUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "12h" }
    );
    res.status(201).json({
      msg: "user created successfully",
      resp_code: "200",
      response: {
        token: token,
        userName: newUser.userName,
        email: newUser.email,
      },
    });
  } catch (error) {}
};

const allTask = async (req, res) => {
  try {
    const tasks = await Task.find({ task });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).send({ error: "Internal sever error" });
  }
};

const createTask = async (req, res) => {
  try {
    const body = req.body;
    const task = await Task.create({ task: body });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

const deleteTask = (req, res) => {
  console.log("delete task");
  res.send("delete task");
};

const updateTask = (req, res) => {
  console.log("update task");
  res.send("update task");
};

const findOneTask = (req, res) => {
  console.log("find one task");
  res.send("find one task");
};

module.exports = {
  allTask,
  createTask,
  deleteTask,
  updateTask,
  findOneTask,
  signup,
  login,
};
