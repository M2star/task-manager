const mongoose = require("mongoose");

const ConnectToDb = (url) => {
  return mongoose.connect(url);
};

module.exports = ConnectToDb;
