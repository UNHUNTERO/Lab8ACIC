var connection = require('../config/config.bd');
var Ship = function (ship) {
    this.Id_ship = ship.id_ship;
    this.Type = ship.type;
    this.Lenght = ship.lenght;
    this.Width = ship.width;
    this.Speed = ship.speed;
    this.Load_cap = ship.load_cap;
};
Ship.create = function (newShip, result) {
    connection.query("INSERT INTO ship set ?", newShip, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Ship.findById = function (id, result) {
    connection.query("Select * from ship where Id_ship = ?", id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                result(null, res);
            }
        });
};
Ship.findAll = function (result) {
    connection.query("Select * from ship", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Ship : ', res);
            result(null, res);
        }
    });
};
Ship.update = function (id, shp, result) {
    connection.query("UPDATE ship SET ? WHERE Id_ship = ?",
        [shp.Type, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        })
};
Ship.delete = function (id, result) {
    connection.query("DELETE FROM ship WHERE Id_ship = ?",
        [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        })
};
module.exports = Ship;
