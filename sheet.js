const sheetRouter = require("express").Router();
const { Sheet } = require("./sheet_model");

sheetRouter.post("/", async (req, res) => {
  try {
    const sheet = new Sheet(req.body);
    const result = await sheet.save();
    res.status(200).send(result);
  } catch (x) {
    res.status(400).send(x.errors.description.message);
  }
});

sheetRouter.get("/", async (req, res) => {
  try {
    const result = await Sheet.find().select("-__v");
    res.status(200).send(result);
  } catch (ex) {
    res.status(400).send(x.message);
  }
});

sheetRouter.get("/:name", async (req, res) => {
  try {
    const result = await Sheet.findOne({ name: req.params.name }).select(
      "-__v"
    );
    if (!result) {
      return res.status(404).send("Sheet with this name is not found !");
    }
    res.status(200).send(result);
  } catch (ex) {
    res.status(400).send(x.message);
  }
});

module.exports = sheetRouter;
