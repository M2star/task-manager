const express = require("express");
const { connectToDb } = require("./database/connection");
const ConnectToDb = require("./database/connection");
const task = require("./routes/routes");
var cors = require('cors')
const morgan = require('morgan')


const app = express();
require("dotenv").config();
const PORT = 3000;
app.use(express.json());
app.use(morgan('combined'))
app.use(cors({credentials:true, origin:'http://localhost:3001'}))
app.use("/api/v1/tasks", task);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

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
