var connection = require('../config/config.bd');
var Port = function (port) {
    this.Id_port = port.id_port;
    this.Naz_port = port.naz_port;
    this.Size = port.size;
    this.Depth = port.depth;
    this.Berth_num = port.berth_num;
    this.Cargo_type = port.cargo_type;
};
Port.create = function (newPort, result) {
    connection.query("INSERT INTO port set ?", newPort, function (err, res) {
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
Port.findById = function (id, result) {
    connection.query("Select * from port where Id_port = ?", id,
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
Port.findAll = function (result) {
    connection.query("Select * from port", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Port : ', res);
            result(null, res);
        }
    });
};
Port.update = function (id, port, result) {
    connection.query("UPDATE port SET ? WHERE Id_port = ?",
        [port, id],
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
Port.delete = function (id, result) {
    connection.query("DELETE FROM port WHERE Id_port = ?",
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
module.exports = Port;
