var path = require('path');

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    });
    app.get("/burgers", function(req, res) {
        res.sendFile(path.join(__dirname, "..views/index.handlebars"));
    });
};