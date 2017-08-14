var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.redirect("/burgers");
    });
    app.get("/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.render("index", { burger_data: dbBurger });
        });
    });
    app.post("/burgers/create", function(req, res) {
        db.Burger.create({ burger_name: req.body.burger_name }).then(function(dbBurger) {
            res.redirect("/");
        });
    });
    app.put("/burgers/update", function(req, res) {
        db.Burger.update({ devoured: 1 }, {
            where: { id: req.body.id }
        }).then(function(dbBurger) {
            res.redirect('/');
        });
    });
};