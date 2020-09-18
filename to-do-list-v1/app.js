const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var items = ["Foo", "Foo", "Foo"];  // List that holds all to-do items

app.set('view engine', 'ejs'); // Tells app to use ejs as a view engine
app.use(bodyParser.urlencoded({encoded: true}));  // Parses through body


app.get("/", function (req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options); // Generates a string from the current date

  res.render("list", {kindOfDay: day, newListItems: items});  // Passes the current day and list items to website
});


app.post("/", function (req, res) {

  var item = req.body.newItem;

  items.push(item); //  Item is appended to items when the user clicks submit

  res.redirect("/");  // Redirects to app.get
})


app.listen(3000, function () {

  console.log("Server up on port 3000");
});
