const express = require('express')

const app = express()

const mysql = require("mysql")

var con = mysql.createConnection({
        host: ${{MYSQLHOST}},
    user: ${{MYSQLUSER}},
port:${{MYSQLPORT}},
password: ${{MYSQLPASSWORD}},
database: ${{MYSQLDATABASE}}

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/Login", (req,res) =>{

    res.send("helloworld");

})

app.listen(8000)