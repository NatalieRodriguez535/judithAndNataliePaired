// EASY (1) 
// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]

function splitOddAndEven(number) {
    let odd = [];
    let even = [];

    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            // even #
            even.push(number[i]);
        } else {
            // odd #
            odd.push(number[i]);
        }
    }

    const returnObject = {
        odd,
        even,
    };

    return returnObject;
}

console.log(splitOddAndEven([2, 4, 7, 11, 15, 16]));





// EASY (2)
// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:												Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

function isPrime(num) {

    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            } else if (num === i * i) {
                return false
            } else {
                return false;
            }
        }
    } else {
        return false;
    }

}

function sortPrime(primeArray) {
    let prime = [];
    let notPrime = [];

    for (let number of primeArray) {
        if (isPrime(number)) {
            prime.push(number);

        } else {
            notPrime.push(number);
        }

    const returnObject = {
        notPrime,
        prime,
    };

    return returnObject;
}
console.log(sortPrime([3, 97, 11,491, 953]));



// MEDIUM (1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’
// Example 3:
// Input: vowelChecker(‘y’)
// Output: ‘This is sometimes a vowel’

var findVowel = function (letterVowel) {

    var vowels = ["a", "e", "i", "o", "u", "y"];

    for (var i = 0; i < vowels.length; i++) {
        if (letterVowel === vowels[i]) {
            return ("This is a vowel");
        }
    }

    return ("This is not a vowel");

};
console.log(findVowel("o"));
console.log(findVowel("p"));



// MEDIUM (2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

function compareAnagrams(a, b) {
    y = a.split("").sort();
    z = b.split("").sort();
    for (i = 0; i < y.length; i++) {
        if (y.length === z.length) {
            if (y[i] === z[i]) {
                console.log(a + " and " + b + "are anagrams!");
                break;
            } else {
                console.log(a + " and " + b + " aren't anagrams.");
                break;
            }
        } else {
            console.log(a + " has a different amount of letters than " + b);
        }
        break;
    }
}

compareAnagrams ("clean house", "school ");

compareAnagrams ("tool", "desk");



// MEDIUM (3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 
// Example 1:
// Input: gdc_two_numbers(336,260)
// Output: 24

// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

function twoNumbers(a, b) {
    var R;
    while ((a % b) > 0) {
        R = a % b;
        a = b;
        b = R;
    }
    return b;
}

console.log(twoNumbers(666, 420));



// MEDIUM (4)
// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033 
// Example 3:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

class car{
    constructor(make,model,year,mileage){
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
    }
  
    driveToSchool(){
      console.log(`Old Mileage: ${this.mileage}`)
      this.mileage += 33;
      console.log(`New Milage: ${this.mileage}`)
    }
  
  
    driveHome(){
      console.log(`Old Mileage: ${this.mileage}`)
      this.mileage += 24000;
      console.log(`New Milage: ${this.mileage}`)
    }
  
    runErrands(){
      console.log(`Old Mileage: ${this.mileage}`)
      this.mileage += 30;
      console.log(`New Milage: ${this.mileage}`)
    }
  }
  
  let c1 = new car("Mini", "Country Man", "2010", 100);
  c1.driveHome();
  
  c1.runErrands();
  
  c1.driveToSchool();
  
 



// Hard (1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True

// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False