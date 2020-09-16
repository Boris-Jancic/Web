const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {

  var crypto = req.body.crypto; // Chosen crypto
  var fiat = req.body.fiat; // Chosen fiat

  var final_url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + fiat;

  // Sends request to bitcoinaverage.com
  request(final_url, function (error, response, body) {
    console.log(response.statusCode); // Prints status code (200> - OK ; 400> - NOT OK)
    // console.log(response.body); // Prints JSON


    if (response.statusCode >= 400) {  // If bitcoinaverage server doesent respond
      console.log("No access, try again");
    } else {
      console.log("Connection established");

      var data = JSON.parse(body);
      var price = data.last;
      console.log(price);

      res.send("<h1>The current price of " + crypto + " is " + price + " " + fiat + " </h1>");
    }
  })

})

app.listen(3000, function () {
  console.log("Server running at port 3000");
})
