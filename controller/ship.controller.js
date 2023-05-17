const Ship = require('../model/ship.model');

exports.findAll = function (req, res) {
    Ship.findAll(function (err, ship) {
        console.log('controller')
        if (err)
            res.send(err);
        res.send(ship);
    });
};
exports.create = function (req, res) {
    const new_ship = new Ship(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });

    } else {
        Ship.create(new_ship, function (err, ship) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "ship added successfully!", data: ship });
        });
    }
};
exports.findById = function (req, res) {
    Ship.findById(req.params.id, function (err, ship) {
        if (err)
            res.send(err);
        res.json(ship);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Ship.update(req.params.id, new Ship(req.body), function (err, ship) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'ship successfully updated!'});
        });
    }
};
exports.delete = function (req, res) {
    Ship.delete(req.params.id, function (err, ship) {
        console.log("HI"+req.params.id);
        if (err)
                res.send(err);
        res.json({ error: false, message: 'ship successfully deleted!'});
    });
};

