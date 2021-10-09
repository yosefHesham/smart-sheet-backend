const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect("mongodb://localhost/smart-sheet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
