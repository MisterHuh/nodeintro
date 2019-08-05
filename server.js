
const express = require("express"); // loaded the code and stored into express

const server = express();

function handleGetRequestToRoot( request, response ){
  console.log("/ was called");
  response.send("Hello, world");
}
server.get("/", handleGetRequestToRoot);

const compliments = [
  "nice to meet you",
  "you look nice",
  "you look great",
  "you look bad",
  "you look terrible"
];

server.get("/compliments", function( request, response ){
  let compLength = compliments.length;
  let randomizer = Math.floor(Math.random() * compLength);
  response.send(compliments[randomizer]);
})

server.listen( 3001, function(){console.log("server has started 3")});
// 3001 = port;
