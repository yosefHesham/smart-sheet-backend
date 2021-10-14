const sheetRouter = require("express").Router();
const { Sheet } = require("./sheet_model");

function createResponse(status, message) {
  return { status: status, result: message };
}

sheetRouter.post("/", async (req, res) => {
  try {
    let sheet;
    sheet = await Sheet.findOne({ name: req.body.name });
    if (sheet) {
      return res
        .status(400)
        .json(createResponse("error", "sheet with this name already exists"));
    }
    sheet = new Sheet(req.body);
    const result = await sheet.save();
    res.status(200).json(createResponse("success", result));
  } catch (x) {
    res.status(400).json(createResponse("error", x.message));
  }
});

sheetRouter.get("/", async (req, res) => {
  try {
    const result = await Sheet.find().select("name -difficulty -author");
    res.status(200).json(createResponse("success", result));
  } catch (ex) {
    res.status(400).json(createResponse("error", x.message));
  }
});

sheetRouter.get("/?q=name/:name", async (req, res) => {
  try {
    const result = await Sheet.findOne({ name: req.params.name }).select(
      "-__v"
    );
    if (!result) {
      //return res.status(404).send("Sheet with this name is not found !");
      return res
        .status(404)
        .json(createResponse("error", "Sheet with this name is not found !"));
    }
    res.status(200).json(createResponse("success", result));
  } catch (ex) {
    res.status(400).json(createResponse("error", x.message));
  }
});

sheetRouter.get("/?q=id/:id", async (req, res) => {
  try {
    const result = await Sheet.findById(req.params.id).select("-__v");
    if (!result) {
      //return res.status(404).send("Sheet with this name is not found !");
      return res
        .status(404)
        .json(createResponse("error", "Sheet with this id is not found !"));
    }
    res.status(200).json(createResponse("success", result));
  } catch (ex) {
    res.status(400).json(createResponse("error", x.message));
  }
});

module.exports = sheetRouter;
