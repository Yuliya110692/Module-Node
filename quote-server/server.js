// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const PORT = 3000;

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("quotes", function (req, res) {
  res.send(quotes)
})


app.get("/quotes/search",function (req, res) {
  res.send(lodash.sample(quotes))
} )

app.get("/quotes/search", function(req, res) {
  const term = req.query.term
  // console.log(term)
  const resultSearchQuotes = pickFromArray(term)
  res.send(resultSearchQuotes)
})

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
