var express = require('express');

var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 };

 app.post('/addUser', function (req, res) {
    // First read existing users.
    var json = req.body

    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );

       data["user4"] = json;
       console.log( data);
       res.end( JSON.stringify(data));
    });
 })


 app.listen(8080, () => {
     console.log(`Server started on port 8080`);
 });