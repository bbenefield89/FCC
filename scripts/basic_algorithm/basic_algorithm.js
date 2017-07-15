<<<<<<< HEAD
// Call reverseString('') to reverse any string
function reverseString(str) {
  /*
  ** This return splits the string at every character into an array
  ** Reverses said array
  ** Then joins said array at every character back into a string
  */
  return str.split('').reverse().join('');
}
reverseString("hello");

/*
**
*/

// Factorialize any whole integer using recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  else {
    return num * factorialize(num - 1);
  }
}
factorialize(5);

/*
**
*/

// Find the longest word in a string
function findLongestWord(str) {
  // Split str at every whitespace into a new array strArr
  var strArr = str.split(' ');
  // initialize empty array checkLen for future use
  var checkLen = [];

  // Iterate through strArr 
  for (var i = 0; i < strArr.length; i++) {
  // Push every iteration of strArr into checkLen
    checkLen.push(strArr[i]);

  // Check if first index length of checkLen is less than strArr[i]
    if (checkLen[0].length < strArr[i].length) {
  // If returns true send strArr[i] to the zeroeth index of checkLen
      checkLen.unshift(strArr[i]);
    }
  }
  
  // The longest word will always be at the zeroeth index regardless of array size
  return checkLen[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

/*
**
*/

// Find the largest numbers in X amount of array
// For this challenge there will never be more than four arrays inside arr
function largestOfFour(arr) {
  // Initialize arrays for future use
  var newArr = [];
  var finArr = [];

  /*
  **
  */

  /*
  ** Out of the box, Array.prototype.sort() sorts arrays in alphabetical order instead of numerical.
  ** The problem with that is 1 = A, while 8 = H in the alphabet. sort() finds 1001 to be smaller than 857
  ** Because it finds the first integer (ie [1]001 or [8]57), and sorts it alphabetically.
  ** This method does the exact opposite. Now we may easily sort arrays numerically by calling the method.
  */
  Array.prototype.sortNormal = function() {
    return this.sort(function(a,b) {
      return a - b;
    });
  };
  
  // Iterate through arr
  for (var i = 0; i < arr.length; i++) {
  // Push every iteration to newArr
    newArr.push(arr[i]);
  }
  
  // Iterate through newArr
  for (var j = 0; j < newArr.length; j++) {
      newArr[j].sortNormal();    // Sort every sub-array chronologically
      newArr[j].reverse();       // Reverse the order in case subarrays were to ever become larger than four
      finArr.push(newArr[j][0]); // Push the zeroeth index of ever sub-array in Newarr
  }
  
  return finArr; // returns [5, 27, 39, 1001]
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
**
*/

/*
** Confirm a string ends with another string
** For this challenge I found RegExp() to be the easiest method.
** RegExp() is allowed to take string variable and concatenate other regex characters such as $
*/
function confirmEnding(str, target) {
  return RegExp(target + '$').test(str); // Just like saying '/target$/.test(str)'
}
confirmEnding("Bastian", "n"); // Returns true

/*
**
*/

// Repeat str num number of times
function repeatStringNumTimes(str, num) {
  // Initialize variables
  var i = num;
  var repStr = '';
  
  // Add str to repStr for ever WHILE loop as long as i is greater than 0
  while (i > 0) {
    repStr += str;
    i--;
  }
  return repStr; // Returns 'abcabcabc'
}
repeatStringNumTimes("abc", 3);

/*
**
*/

// Truncate any string longer than num
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num)+'...'; // Start at the zeroeth index of str up to num and add ...
  }
  else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

/*
**
*/

// Find the first integer in arr that returns true
function findElement(arr, func) {
  // Initialize num as empty array to push into later
  var num = [];
  
  // Iterate through arr and push to num
  for (var i = 0; i < arr.length; i++) {
    num.push(arr[i]);
    
  // Check if any iteration of func(num[i]) is true
    if (func(num[i]) === true) {
      
  // The first iteration (if any) that returns true ends function
      return num[i]; // [2, 4] will return true
    }
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*
**
*/

// Check if bool is a boolean
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true) {
    return true;
  }
  else if (bool === false) {
    return true;
  }
  else {
    return false;
  }
}

booWho(false);

/*
**
*/

// Every new word in str needs to have the first letter capitalized
function titleCase(str) {
return str.replace(/\w\S*/g, function(txt) { // Checks for a character then zero or more non-white space
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); // Replaces the first char with a CAP letter
}

titleCase("I'm a little tea pot");
||||||| merged common ancestors
=======
// Call reverseString('') to reverse any string
function reverseString(str) {
  /*
  ** This return splits the string at every character into an array
  ** Reverses said array
  ** Then joins said array at every character back into a string
  */
  return str.split('').reverse().join('');
}
reverseString("hello");

/*
**
*/

// Factorialize any whole integer using recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  else {
    return num * factorialize(num - 1);
  }
}
factorialize(5);

/*
**
*/

// Find the longest word in a string
function findLongestWord(str) {
  // Split str at every whitespace into a new array strArr
  var strArr = str.split(' ');
  // initialize empty array checkLen for future use
  var checkLen = [];

  // Iterate through strArr 
  for (var i = 0; i < strArr.length; i++) {
  // Push every iteration of strArr into checkLen
    checkLen.push(strArr[i]);

  // Check if first index length of checkLen is less than strArr[i]
    if (checkLen[0].length < strArr[i].length) {
  // If returns true send strArr[i] to the zeroeth index of checkLen
      checkLen.unshift(strArr[i]);
    }
  }
  
  // The longest word will always be at the zeroeth index regardless of array size
  return checkLen[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

/*
**
*/

// Find the largest numbers in X amount of array
// For this challenge there will never be more than four arrays inside arr
function largestOfFour(arr) {
  // Initialize arrays for future use
  var newArr = [];
  var finArr = [];

  /*
  **
  */

  /*
  ** Out of the box, Array.prototype.sort() sorts arrays in alphabetical order instead of numerical.
  ** The problem with that is 1 = A, while 8 = H in the alphabet. sort() finds 1001 to be smaller than 857
  ** Because it finds the first integer (ie [1]001 or [8]57), and sorts it alphabetically.
  ** This method does the exact opposite. Now we may easily sort arrays numerically by calling the method.
  */
  Array.prototype.sortNormal = function() {
    return this.sort(function(a,b) {
      return a - b;
    });
  };
  
  // Iterate through arr
  for (var i = 0; i < arr.length; i++) {
  // Push every iteration to newArr
    newArr.push(arr[i]);
  }
  
  // Iterate through newArr
  for (var j = 0; j < newArr.length; j++) {
      newArr[j].sortNormal();    // Sort every sub-array chronologically
      newArr[j].reverse();       // Reverse the order in case subarrays were to ever become larger than four
      finArr.push(newArr[j][0]); // Push the zeroeth index of ever sub-array in Newarr
  }
  
  return finArr; // returns [5, 27, 39, 1001]
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
**
*/

/*
** Confirm a string ends with another string
** For this challenge I found RegExp() to be the easiest method.
** RegExp() is allowed to take string variable and concatenate other regex characters such as $
*/
function confirmEnding(str, target) {
  return RegExp(target + '$').test(str); // Just like saying '/target$/.test(str)'
}
confirmEnding("Bastian", "n"); // Returns true

/*
**
*/

// Repeat str num number of times
function repeatStringNumTimes(str, num) {
  // Initialize variables
  var i = num;
  var repStr = '';
  
  // Add str to repStr for ever WHILE loop as long as i is greater than 0
  while (i > 0) {
    repStr += str;
    i--;
  }
  return repStr; // Returns 'abcabcabc'
}
repeatStringNumTimes("abc", 3);

/*
**
*/

// Truncate any string longer than num
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num)+'...'; // Start at the zeroeth index of str up to num and add ...
  }
  else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

/*
**
*/

// Find the first integer in arr that returns true
function findElement(arr, func) {
  // Initialize num as empty array to push into later
  var num = [];
  
  // Iterate through arr and push to num
  for (var i = 0; i < arr.length; i++) {
    num.push(arr[i]);
    
  // Check if any iteration of func(num[i]) is true
    if (func(num[i]) === true) {
      
  // The first iteration (if any) that returns true ends function
      return num[i]; // [2, 4] will return true
    }
  }
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*
**
*/

// Check if bool is a boolean
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true) {
    return true;
  }
  else if (bool === false) {
    return true;
  }
  else {
    return false;
  }
}

booWho(false);

/*
**
*/

// Every new word in str needs to have the first letter capitalized
function titleCase(str) {
return str.replace(/\w\S*/g, function(txt) { // Checks for a character then zero or more non-white space
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); // replaces the first char with a CAP letter
}

titleCase("I'm a little tea pot");
>>>>>>> 9d12e8892c65408a867b4b903a7bf5ef69d61f31
