const express = require("express");
const app = express();

const magicArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

function answer() {
    let x = Math.floor(Math.random() * magicArray.length);
    return magicArray[x];
}

app.get("/magic/:question", (req,res) => {

    res.send(`${req.params.question} <br> ${answer()}`);
})

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