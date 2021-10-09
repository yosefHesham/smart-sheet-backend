const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(
    "mongodb+srv://yosef:Waelz01234@cluster0.ej9zt.mongodb.net/project0?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
