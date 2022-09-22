const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send("Answer: " + sum);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiClaculator.html");
});

app.get("/bmiCalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    app.send("Your BMI is:" + bmi);
    
});

app.listen(3000, function(){
    console.log("Database started on Port: 3000...");
});


