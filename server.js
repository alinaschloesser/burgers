var express = require("express"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    exphbs = require("express-handlebars"),
    app = express(),
    PORT = process.env.PORT || 3000;
db = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./routes/devour-routes.js')(app);
require('./routes/html-routes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port: " + PORT);
    });
});