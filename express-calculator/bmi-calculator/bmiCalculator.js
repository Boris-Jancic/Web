const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

  console.log(req.body.height);
  console.log(req.body.weight);

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / Math.pow(height, 2);

  res.send("Your BMI is " + bmi);
})

app.listen(3000, function () {
  console.log("Server up at port 3000");
})
