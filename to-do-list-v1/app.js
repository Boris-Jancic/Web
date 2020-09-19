const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + "/date.js");

let items = ["Get up", "Go to work", "Buy groceries"];  // List that holds all to-do items
let workItems = []

app.set('view engine', 'ejs'); // Tells app to use ejs as a view engine
app.use(bodyParser.urlencoded({encoded: true}));  // Parses through body
app.use(express.static("public"));

app.get("/", function (req, res) {
  let day = date.getDate(); 

  res.render("list", {listTitle: day, newListItems: items});  // Passes the current day and list items to website
});


app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);   //  Item is appended to items when the user clicks submit
    res.redirect("/work");   // Redirects to app.get (work)
  } else {
    items.push(item); //  Item is appended to items when the user clicks submit
    res.redirect("/");  // Redirects to app.get
  }

})


app.get("/work", function (req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.get("/about", function (req, res) {
  res.render("about");
})

app.listen(3000, function () {

  console.log("Server up on port 3000");
});
