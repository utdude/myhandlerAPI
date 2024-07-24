const express = require('express')

const app = express()

const mysql = require("mysql")

var con = mysql.createConnection({
    host: "mysql.railway.internal",
    user: "root",
    port:3306,
    password: "yjiFEBioMnuwbKWBWtLhfvAQtovfPmaO",
    database: "railway"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.post("/Login", (req,res) =>{

    res.send("helloworld");

})

app.listen(8000)