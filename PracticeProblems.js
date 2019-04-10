
// ('My name is {name}', 'Joe') => 'My name is Joe
function func(str, name) {
  let start, end;
  for (var i = 0; i <= str.length; i++) {

    if (str[i] === "{") {
      start = i;
    }

    if (str[i] === "}") {
      end = i;
    }
  }

  return str.slice(0, start) + ' ' + name + ' ' + str.slice(end + 1, str.length);
}
console.log(func("hello my name is {name}", "Arton"));










/*
var obj = {
    name: 'Joe',
    age: 25
  }
  func('My name is {name} and I am {age} years old.' obj) => 'My name is Joe and I am 25'
*/

const sentence = "My name is {name} and I am {age} years old.";
const Me = {
  name: "Arton",
  age: 26
};

function replaceBrackets(str, obj) {
  let start, end, newStr;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === "{") {
      start = i;
    }

    if (str[i] === "}") {
      end = i;
      newStr = str.slice(start, end + 1);
      str = str.replace(newStr, obj[str.slice(start + 1, end)]);
    }
  }
  return str;
}

console.log(replaceBrackets(sentence, Me));














// string palindrome
function palindrome(str) {
  var len = str.length;

  for (let i = 0; i < str.length / 2; i++) { // cuts str in half
    if (str[i] !== str[len - 1 - i]) { // if characters match, loop will go on
      return false; // when characters dont match anymore
    }
  }
  return true;
}
palindrome("racecar");











// Palindrome Permutation
// O(n) time
function palindromePermutation(str) {
  var obj = {}; // create an obj to hold all counts of letters
  var count = 0; // check the obj for letters that appear an odd number of times
  var keys = Object.keys(obj);

  for (var i = 0; i < str; i++) {
    obj[i]++; // iterate through string, populate the obj
  }

  for (var i = 0; i < keys.length; i++) { // iterate through obj and increase out count by 1, any time we get a number of odd occurrences
    if (obj[keys[i]] % 2 === 0) {
      count++;
    }

    if (count > 1) { // if more than 1 odd occureences, string cannot be a palindrome
      return false;
    }
  }
  return true;
}

console.log(palindromePermutation("ivicc"));















/*
We're part of the companies SMS messaging team.
A lot of our messages are really long and need to be split into smaller chunks that we can send, one at a time.
In case the messages are sent out of order by our provider we also want to annotate the chunks.
Finally, we want to avoid cutting words.


In summary: We're given a message and a max character limit and wish to do the following,
- Chunk the messages such that the max size of a chunk is max_size
- Add annotation information to each message as such:"... (1/3)", 
the chunk + annotation should be <= the max_size. An annotation is `(part/total)`
- Do not split between words.


For example given "Hello how are you, good luck on this interview question!" with max limit 25, you should get 
['Hello how are you, good ' (1/3)', 'luck on this (2/3)', 'interview question!(3/3)']

1) Assume there will be a maximum of 9 chunks to return.
2) Assume there is no maximum limit to the number of chunks we'll need to return.
*/



const main = function (str) {

  let result = [];

  let chunck = '';

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (chunck.length <= 25) {
      chunck += str[i];
    }
    else {
      chunck += (result.length + 1);
      result.push(chunck);
      count++;
      result.push(`${count}/9`);
      chunck = '';
    }
  }
  return result;

}

console.log(main("Hello how are you, good luck on this interview question!"));

















// Daily Temperatures
function dailyTemp(temperatures) {
  let days = []; // array of results [1, 1, 4, 2, 1, 1, 0, 0]
  let index = []; // keep track of previous warmer index [0, 1, 2, 3, 4, 5,]
  for (let i = 0; i < temperatures.length; i++) {
    // looking to see if the current temp is > the next temp in the stack
    // keep track of previous warmer temp
    while (temperatures[i] > temperatures[index[index.length - 1]]) {
      // if current is warmer, pop it
      // no day that has a warmer temp after it
      // and its less than our current temp
      let previous = index.pop();
      // i is where you currently are, current temp is going to be the last position your at
      // i is minusing the previous index of the previous temp to tell how many days in between
      days[previous] = i - previous;
    }
    // how many days does it take to get to the last day next warmer temp
    // 0, theres nothing that will be greater after it, push onto stack
    // last day were going to return current days, push onto stack
    days[i] = 0;
    index.push(i);
  }
  return days;
}

console.log(dailyTemp([73, 74, 75, 71, 69, 72, 76, 73]));















const camelCase = (str) => {
  return str.split(' ').map(function (letter, i) {
    return i == 0 ? letter.toLowerCase() : letter.toUpperCase();
  });
}

console.log(camelCase("simulmedia_front_end"));









// Remove duplicate elements in an array. [1, 1, 2, 3, 3, 4] => [1, 2, 3, 4]
function removeDuplicates(array) {
  var newArray = [];
  var obj = {};

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    // checks if the element is in the object, 
    // if not then it adds it to the object and the newArray. 
    // if element is in the object, it skips that element, skip duplicates
    if (!obj[element]) {
      obj[element] = true;
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 4]));
















// sort the array
function sortArray(array) {
  // loop through array
  // find the smallest value and put it in first
  // keep looping until you find the numbers in order
  for (var i = 0; i < array.length; i++) { // loop through unsorted array
    min = i;
    for (var j = i; j < array.length; j++) {
      // check the array if any other value is smaller
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // if the smallest num isnt in the position, well swap it
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(sortArray([9, 1, 8, 2, 7, 3, 6, 4, 5]));











/*
  I made the object of the alphabet and had all the values set to false, 
  and did a loop over the string that was passed in, every loop through, 
  I would check if the value in the obj was true/false. 
  if it was false I set it to true, 
  if it was true I left it true at the end 
  I just printed out all of the keys in the objec that were set to false
*/

// return letters that aren't in string 'abcdefg' => 'hijklmnpo...'

function func(str) {
  var alphabet = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false
  };

  let newStr = '';

  // loop over the string that was passed in, every loop through,
  // check if the value in the obj was true/false.
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    // if it has value, if true do nothing, if false => add to newStr
    if (!alphabet[letter]) {
      alphabet[letter] = true;
      newStr += letter;
    }
  }
  return alphabet;
}

console.log(func('arton'));



















// test to see if braces match {[()]}
function match(str) {

  // put in array, to keep track of matches
  // add the open braces first
  // delete them once we found a match
  let testArray = [];

  var i = ''; // each tag

  if (str[i] === "{" || str[i] === "(" || str[i] === "[") {
    testArray.push(str[i]); // add to the testArray
  }
  // now we want to test if the open braces matches with the ending braces
  // we want to delete from the array, telling it that it found a match
  else if (str[i] === "}") {
    if (testArray[testArray.length - 1] === "{") {
      testArray.pop();
    }
    // if the braces dont match
    else {
      return false;
    }
  }

  else if (str[i] === ")") {
    if (testArray[testArray.length - 1] === "(") {
      testArray.pop();
    }
    else {
      return false;
    }
  }

  else if (str[i] === "]") {
    if (testArray[testArray.length - 1] === "[") {
      testArray.pop();
    }
    else {
      return false;
    }
  }

  // proving that if array is empty, they found all the matching pairs
  if (testArray.length === 0) {
    return true;
  }
  else {
    return false;
  }
  return testArray;
}

console.log(match("{([])}"));

















// reverse string
function reverseString(str) {
  var rev = "";
  // start at last letter in the string, work backwards from there
  for (var i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}
console.log(reverseString("hello my name is Arton"));











// print out 1,2,3,4,5 in 5 seconds
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000);
}

// or

for (var i = 1; i <= 5; i++) {
  let j = i;
  setTimeout(() => {
    console.log(i);
  }, 5000);
}













// Parentheticals
function parentheticals(str) {
  let array = [];

  var i = '';

  // add to array
  if (str[i] === '(') {
    array.push(str[i]);
  } else if (str[i] === ')') {
    if (array[array.length - 1] === '(') {
      array.pop();
    } else {
      return false; // if they dont match
    }
  }

  if (array.length === 0) {
    return true;
  } else {
    return false;
  }

  return array;
}

console.log(
  parentheticals(
    'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.'
  )
);














// takes stockPrices and returns the best profit I could have 
// made from one purchase and one sale of one share of Apple stock yesterday.
function profit(stockPrices) {
  let bestProft = 0;

  for (let i = 0; i < stockPrices.length; i++) {

    // for every time it was greater than or less than
    for (let j = 0; j < stockPrices.length; j++) {
      // find previous and current time
      let prev = Math.min(i, j);
      let curr = Math.max(i, j);

      // find prev and curr prices
      let prev = stockPrices[prev];
      let curr = stockPrices[curr];

      // purchase stock at min price that had a value of the current price
      let profit = curr - prev;

      // which is better
      bestProft = Math.max(bestProft, profit);
    }
  }
  return bestProft;
}














// 3sum 
const main = function (numbers) {
  const result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        const a = numbers[i];
        const b = numbers[j];
        const c = numbers[k];
        const set = `${a} ${b} ${c}`;
        if (a + b + c === 0 && result.indexOf(result) === -1) {
          result.push(set);
        }
      }
    }
  }

  return result;
}

console.log(main([9, -6, -5, 9, 8, 3, -4, 8, 1, 7, -4, 9, -9, 1, 9, -9, 9, 4, -6, -8]));
















// Write a function to find the longest common prefix string amongst an array of strings
function longestCommonPrefix(str) {

  // check if the index of the substring is 0 in the next str
  // if not we remove a char, check again
  // if it is, we check again

  if (str.length === 0) {
    return '';
  }

  var first = str[0].length; // the first word in array

  for (let i = 0; i < first; i++) {
    var prefix = str[0][i];
    for (let j = 1; j < str.length; j++) {
      if (str[j][i] !== prefix) {
        return str[0].substring(0, i);
      }
    }
  }
  return str[0];
}

console.log(longestCommonPrefix(["abcdefgh", "abfghijk", "abcefgh"]));















// Length of Last Word
const lastWord = function (str) {
  let word = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      word++;
    }
    else if (word !== 0) {
      return word;
    }
  }
  return word;
}

console.log(lastWord('my name is Arton'));







// count number of occurences in a given character
function main(letter, str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(main('p', 'apple'));



// fizz buzz
function fizzBuzz(num) {
  if (num % 3 === 0) {
    console.log("Fizz");
  }
  if (num % 5 === 0) {
    console.log("Buzz");
  }
  else if (num % 3 === 0 && num % 5 === 0) {
    console.log("Fizz Buzz");
  }
  return num;
}

console.log(fizzBuzz("9"));







// capitalize first letter in str
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    }
    else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalize("arton"));





// n time
// fibonacci
function fib(n) {
  if (n < 2) {
    return n;
  }
  else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(9));






// Binary Search
function binary_search(a, value) {
  var low = 0, high = a.length - 1;

  while (low <= high) {
    var mid = (low + high) / 2;
    if (a[mid] > value) {
      high = mid - 1;
    }
    else if (a[mid] < value) {
      low = mid + 1
    }
    else {
      return mid;
    }
  }
  return false;
}

console.log(binary_search([1, 2, 3, 4, 5, 6], 4));








/*
Looping a Triangle
#
##
###
####
#####
######
#######
*/

for (var i = '#'; i.length < 8; i += '#') {
  console.log(i);
}








// ChessBoard
// # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #



let len = 8;

let chessBoard = '';

for (var i = 0; i < len; i++) {
  for (var j = 0; j < len; j++) {
    if ((i + j) % 2 == 0) {
      chessBoard += '#';
    } else {
      chessBoard += ' '
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard);





// Minimum
function min(x, y) {
  if (x < y) {
    return x;
  }
  else {
    return y;
  }
}

console.log(min(6, 4));

















/*
{
 query: {
    results: {
      channel: {
        item: {
          forecast: {
            "Mon: Scattered Showers"
            "Tue: Cloudy"
            "Wed: Partly Cloudy"
            "Thu: Partly Cloudy"
            "Fri: Mostly Sunny"
            "Sat: Rain"
            "Sun: Showers"
          }
        }
      }
    }
  }
}
*/

const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22boston%2C%20MA%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

const fetchWeather = () => {
  fetch(url)

    .then((response) => {
      response.json()
        .then(r => {
          const forecast = r.query.results.channel.item.forecast;
          for (var i = 0; i < forecast.length; i++) {
            const obj = forecast[i];
            console.log(obj.day, obj.text);
          }
        });
    })
    .catch((error) => {
      return error;
    });
  console.log();
};
fetchWeather();







// Get the object at ipinfo.io/json and display the key/value pairs therein in the DOM

import React, { Component } from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = { response: {} };
  }

  componentDidMount() {
    const url = "https://ipinfo.io/json";
    fetch(url)

      .then(res => {
        res.json() // read as json file
          .then(r => {
            this.setState({ response: r });
          });
      })
      .catch((error) => {
        return error;
      });
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <ul>
          Objectkeys(response.map(k( , i) => (
          <li key={i}>
            {k}: {response[k]}
          </li>
          ));
         </ul>
      </div>
    );
  }
}

ReactDOM.render(<City />, document.getElementById('target'))









// promises are usually dealt with asynchronous code
// represents the successful / failure of an asynchronous operation and it resulting value
// sync - needs to wait for a function to execute before it goes on, slower
// async - other functions can execute while others are running, faster rendering
function fetchData() {
  fetch('http://rallycoding.herokuapp.com/api/music_albums') // - returns a promise, is resolved with an object that represents the underline request
    .then(res => res.json()) // .then is a callback, read res as  json data
    .then(json => console.log(json));  // res.json() returns a promise of its own, that is called after it is ready for us to use
}
fetchData();


const fetchData = async = () => { // function that we declare contains asynchronous code
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
  const json = await res => res.json()
// put the await keyword in front of anything that produces a promise
// then we put down a variable to assign the resolve result of the promise as well   
console.log(json);
}
fetchData();





