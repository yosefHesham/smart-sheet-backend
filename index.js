const app = require("express")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/prod")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on ", port));
