const app = require("express")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/prod")(app);

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on ", port));
