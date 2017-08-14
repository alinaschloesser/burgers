var db = require("../models");

module.exposrts = function(app) {
    app.get("/", function(req, res) {
        res.redirect("/burgers");
    });
    app.get("/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.render("index", { burger_data: result });
        });
    });
    app.post("/burgers/create", function(req, res) {
        db.Burger.create(req.body.burger_name).then(function(dbBurger) {
            res.redirect("/");
        });
    });
    app.put("/burgers/update", function(req, res) {
        db.Burger.update(req.body.id, {
            where: { id: req.body.id }
        }).then(function(dbBurger) {
            res.redirect('/');
        });
    });
};