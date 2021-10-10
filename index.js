const app = require("express")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/prod")(app);

// Adding cors to header
const cors = require('cors')
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on ", port));
