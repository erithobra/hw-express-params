const express = require("express");
const app = express();


app.get("/greeting/:name", (req, res) => {
    res.send(`Hi there, ${req.params.name}`)

})


app.get("/greeting/", (req,res) => {
    res.send("Hello, stranger.");
})

app.listen(3000, () => {
    console.log("Server is listening!!!")
});