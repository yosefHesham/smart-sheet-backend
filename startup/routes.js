const sheetRouter = require("../sheet");
const express = require("express");

module.exports = function (app) {
  app.use(express.json());
  app.use("/sheets", sheetRouter);
};
