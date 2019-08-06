
const express = require("express"); // loaded the code and stored into express
const cors = require("cors");
const server = express();

server.use( cors() );

/*
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
*/

function handleGetRequestToRoot(request, response) {
  console.log("/ was called");
  response.send("Hello, world");
}

const highScores = [
  { name: "guesserman", score: 4 },
  { name: "super guesser", score: 7 },
  { name: "I hate guessing", score: 12 }
];

/* making end point to retrieve highScores */
server.get("/scores", ( request, response )=>{
  response.send( highScores );
})

/* making another end point to add scores */
server.get("/addscore", ( request, response )=>{
  console.log( "currently being added: ", request.query );

  // pushed {name: "jae", score: 3} from post man
  const scoreData = {
    name: request.query.name,
    score: request.query.score
  }
  highScores.push(scoreData);
  //highScores.push(request.query); // do not use this way. You only want the data specific to what you need
  console.log("highScores: ", highScores);



  response.send("done");
})

server.listen( 3001, function(){console.log("server has started 3")});
// 3001 = port;
