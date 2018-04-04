var express = require ('express');
var mysql = require ('mysql');
var app = express();
var PORT = process.env.PORT || 3000;
var connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "",
        database: "wagging_tails",
    });
};

connection.connect();

app.post('/newdog', (req, res) => {
  let dogs = req.body;
  let query = connection.query("INSERT INTO Dogs SET ?", dogs, (err, results) => {

  });
  res.end('Success')
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
