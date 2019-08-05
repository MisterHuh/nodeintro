

// console.log("Hello, world!");

function doMath(num1, operator, num2) {
  var result;

  switch(operator) {
    case "+":
      result = parseInt(num1) + parseInt(num2);
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
    case "X":
    case "x":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      result.toFixed(2);
      break;
  }

  return result;
}

// var answer = doMath(2, "x", 5);

var num1 = process.argv[2];
var operator = process.argv[3];
var num2 = process.argv[4];

var answer = doMath(num1, operator, num2);
console.log(answer);

// console.log( process.argv );
