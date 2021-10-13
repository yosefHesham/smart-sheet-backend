const mongoose = require("mongoose");
const shortId = require("shortid");

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
            return v === "CF" || v === "UVA" || "SPOJ";
          },
          message: "must one of those values [CF , UVA, SPOJ]",
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
