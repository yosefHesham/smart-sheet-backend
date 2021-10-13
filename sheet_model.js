const mongoose = require("mongoose");
const shortId = require("shortid");

const validValues = ["UVA,CF,SPOJ"];

const sheetSchema = mongoose.Schema({
  _id: {
    type: String,
    default: shortId.generate,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },

  contact: mongoose.Schema({
    _id: false,
    twitter: String,
    ask: String,
    linkedIn: String,
    Github: String,
  }),
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  data: [
    mongoose.Schema({
      _id: false,
      type: {
        type: String,
        validate: {
          validator: function (v) {
            return validValues.includes(v.toUpperCase());
          },
          message: `Type must be one of those ${validValues.join(",")}`,
        },
      },
      name: String,
      link: String,
      notes: String,
    }),
  ],

  difficulty: {
    type: Number,
    min: 1,
    max: 5,
  },
});
const Sheet = mongoose.model("sheets", sheetSchema);

module.exports.Sheet = Sheet;
