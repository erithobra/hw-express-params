const express = require("express");
const app = express();

app.get("/tip/:total/:tipPercentage", (req,res) => {
    let x = [req.params.total] * ([req.params.tipPercentage] / 100);
    let y = x.toString(10);
    res.send(y);
});

app.get("/greeting/:name", (req, res) => {
    res.send(`Hi there, ${req.params.name}`)

})

app.get("/greeting/", (req,res) => {
    res.send("Hello, stranger.");
})

app.listen(3000, () => {
    console.log("Server is listening!!!")
});