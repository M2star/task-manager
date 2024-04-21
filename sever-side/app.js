const express = require("express");
const { connectToDb } = require("./database/connection");
const ConnectToDb = require("./database/connection");
const task = require("./routes/routes");
const app = express();
require("dotenv").config();
const PORT = 3000;
app.use(express.json());

app.use("/api/v1/tasks", task);

// app.get("/", (req, res) => {
//   console.log("hello world");
//   console.log(task);
//   res.send("hello world");
// });

const start = async () => {
  try {
    await ConnectToDb(process.env.MONGO_URL);
    app.listen(PORT, (req, res) => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

start();
