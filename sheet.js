const sheetRouter = require("express").Router();
const { Sheet } = require("./sheet_model");

sheetRouter.post("/", async (req, res) => {
  try {
    const sheet = new Sheet(req.body);
    const result = await sheet.save();
    res.status(200).send(result);
  } catch (x) {
    res.status(400).send(x.message);
  }
});

module.exports = sheetRouter;
