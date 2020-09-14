const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // urlencoded ==> grabs data

app.get("/", function(req, res){
  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html"); // sendFile ==> sends a file(html page)
});

app.post("/", function (req, res) {
  console.log(req.body.num1); //  logs first number
  console.log(req.body.num2); //  logs second number

  var num1 = Number(req.body.num1); // Number is writen when
  var num2 = Number(req.body.num2); // converting str to num

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
})

app.listen(3000, function () {
  console.log("Server up at port 3000");
})
