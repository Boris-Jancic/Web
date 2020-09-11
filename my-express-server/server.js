//  jshint esversion:6
const express = require('express');

const app = express();

// .get ==> first paramater is the route which is redirected
//          second is the request and response

app.get("/", function(req, res) { // the "/" means home
  res.send("Hello");
});

app.get("/contact", function(req, res){
  res.send("Contact ne at @@@@")
});

app.get("/about", function(req, res){
  res.send("About page")
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
