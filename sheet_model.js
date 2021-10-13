const mongoose = require("mongoose");

const sheetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg",
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
