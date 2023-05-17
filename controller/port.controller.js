const Port = require('../model/port.model');

exports.findAll = function (req, res) {
    Port.findAll(function (err, port) {
        console.log('controller')
        if (err)
            res.send(err);
        res.send(port);
    });
};
exports.create = function (req, res) {
    const new_Port = new Port(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });

    } else {
        Port.create(new_Port, function (err, port) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Port added successfully!", data: port });
        });
    }
};
exports.findById = function (req, res) {
    Port.findById(req.params.id, function (err, port) {
        if (err)
            res.send(err);
        res.json(port);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Port.update(req.params.id, new Port(req.body), function (err, port) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Port successfully updated!'});
        });
    }
};
exports.delete = function (req, res) {
    Port.delete(req.params.id, function (err, port) {
        console.log("HI"+req.params.id);
        if (err)
                res.send(err);
        res.json({ error: false, message: 'Port successfully deleted!'});
    });
};

