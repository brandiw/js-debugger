document.addEventListener('DOMContentLoaded', function(){
  console.log("Let's learn how to debug.");

  const x = 2;
  const result = Math.power(x, x); //expects 2^2 equals 4
  console.log("Got", result, "Expected 4");

  const y == 4;
  const result2 = y + x; //expect 4 + 2 equals 6
  console.log("Got", result2, "Expected 6");

  const z = { width: 5, height: 7};
  console.log("z is ", z.getWidth(), "inches wide."); //expect "z is 5 inches wide"

  const name = 'weston'
  const string = '${name} is cool as heck'
  console.log(string); // expect "weston is cool as heck"

  const q = 100;
  if(q > 50);{
    console.log("q is a big number"); //this is what should print to the console
  };
  else{
    console.log("q is less than 50 dawg")
  };

  const amount = 13;
  console.log("Got", const amount + 13, "expected 26"); //should print out 26

  amount = amount ^ 2
  console.log("Got", amount, "expected 169") //should print 169, since 169 is 13

  const num = "37";
  if(num = "5"){
    console.log("My num is", num); //This should not get printed since num is "37"
  }

  const henry = "dope dude";
  if{typeof henry === "string"}{
    console.log("henry is a", henry);//should print "henry is a dope dude", which is true
  }

  const actorOfTheCentury = "Nicolas Cage";
  console.log(actorofThecentury, "is a God of excellence and beauty"); //should print "Nicolas Cage is a God of excellence and beauty" which is also true.

  const bestMovieEver = "American Treasure';
  console.log(bestMovieEver);//should print "American Treasure"

  // this should log the numbers from 0 to 5
  for {const i = 0; i < 5; i++} (
    console.log(i)
  )

  const array = ['hi', 'hello', 'sup']
  
  // this should log the words from the array
  for (let str in array) {
    console.log(str);
  }

  document.getElementById("finish").innerText = "YOU'RE ALL DONE!!";
});
