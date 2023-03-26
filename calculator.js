const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Calculator
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;

  res.send(`The Result is ${result}`);
});

// BMI Calculator
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / (height * height);

  res.send(`Your BMI is ${bmi}`);
});

// Local dev port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
