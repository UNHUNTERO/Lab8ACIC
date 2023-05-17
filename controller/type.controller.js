const Type = require('../model/type.model');

exports.findAll = function (req, res) {
    Type.findAll(function (err, type) {
        console.log('controller')
        if (err)
            res.send(err);
        res.send(type);
    });
};
exports.create = function (req, res) {
    const new_Type = new Type(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });

    } else {
        Type.create(new_Type, function (err, type) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Type added successfully!", data: type });
        });
    }
};
exports.findById = function (req, res) {
    Type.findById(req.params.id, function (err, type) {
        if (err)
            res.send(err);
        res.json(type);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Type.update(req.params.id, new Type(req.body), function (err, type) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Type successfully updated!'});
        });
    }
};
exports.delete = function (req, res) {
    Type.delete(req.params.id, function (err, type) {
        console.log("HI"+req.params.id);
        if (err)
                res.send(err);
        res.json({ error: false, message: 'Type successfully deleted!'});
    });
};

