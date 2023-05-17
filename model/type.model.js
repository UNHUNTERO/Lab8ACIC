var connection = require('../config/config.bd');
var Type = function (type) {
    this.Id_type = type.id_type;
    this.Type_name = type.type_name;
    this.Unit = type.unit;
};
Type.create = function (newType, result) {
    connection.query("INSERT INTO type set ?", newType, function (err, res) {
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
Type.findById = function (id, result) {
    connection.query("Select * from type where Id_type = ?", id,
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
Type.findAll = function (result) {
    connection.query("Select * from type", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Type : ', res);
            result(null, res);
        }
    });
};
Type.update = function (id, tp, result) {
    connection.query("UPDATE type SET ? WHERE Id_type = ?",
        [tp, id],
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
Type.delete = function (id, result) {
    connection.query("DELETE FROM type WHERE Id_type = ?",
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
module.exports = Type;
