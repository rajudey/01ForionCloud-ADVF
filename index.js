const express = require('express');
var app = express();

app.use("/", express.static("webapp/"));

app.get("/", (req,res) => {
    res.send("welcome to webpage")
});

this.aVendors = [
    {
        "id":"1",
        "Name":"Raju"
    },
    {
        "id":"2",
        "Name":"Pasu"
    }
];
app.get("/vendors", (req,res) => {
    console.log("starting vendors");
    res.json(this.aVendors);
});

console.log("your server is started on http://localhost:3000");
const portno = process.env.PORT || 3000;
app.listen(portno);