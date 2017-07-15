// This script is not inteded to work on its own but can be used as a reference

//Using .test()
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//Using .match() with [i]gnore case-sensitive and [g]lobal
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex);

//Test string for different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

//Using wildcard to match any character
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

//Match any pre-set character using brackets
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

//Match any alphabet character regardless of capitalization
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

//Match specified alpha-numeric characters
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

//Match anything BUT the specified characters using [^]
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex);

/*Username check:
**Must be atleast two alpha characters long
**If username is less than three characters long can not contain digits
**If username contains digits it must only be at the end
**Username may not contain any characters outside of alpha-numeric
*/
let username = "JackOfAllTrades";
let userCheck = /^[A-z]{2,}[\d]*$/; // Change this line
let result = userCheck.test(username);