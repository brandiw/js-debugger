$(document).ready(function(){
  console.log("Let's learn how to debug.");

  var x = 2;
  var result = Math.power(x, x); //expects 2^2 equals 4
  console.log("Got", result, "Expected 4");

  var y == 4;
  var result2 = y + x; //expect 4 + 2 equals 6
  console.log("Got", result2, "Expected 6");

  var z = { width: 5, height: 7};
  console.log("z is ", z.getWidth(), "inches wide.");

  document.getElementById("finish").innerText = "YOU'RE ALL DONE!!";
});
