                                           // searching for a substring
//str.indexOf(substr, pos).
let str3 = 'Widget with id';

alert( str3.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str3.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str3.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

let str4 = 'Widget with id';
alert( str4.indexOf('id', 2) ) // 12
alert( str4.indexOf(' ') ) //6

let str5 = 'As sly as a fox, as strong as an ox';

let targett = 'as'; // let's look for it

let poss = 0;
while (true) {
  let foundPos = str5.indexOf(targett, poss);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  poss = foundPos + 1; // continue the search from the next position
}
//OR
let str6 = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str6.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

                                                    // Getting a substring 
//str.slice(start [, end])
let str7 = "stringify";
alert( str7.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str7.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str8 = "stringify";
alert( str8.slice(2) ); // 'ringify', from the 2nd position till the end

let str9 = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str9.slice(-4, -1) ); // 'gif'

//str.substring(start [, end])
let str10 = "stringify";

// these are same for substring
alert( str10.substring(2, 6) ); // "ring"
alert( str10.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str10.slice(2, 6) ); // "ring" (the same)
alert( str10.slice(6, 2) ); // "" (an empty string)


//str.substr(start [, length])
let str11 = "stringify";
alert( str11.substr(2, 4) ); // "ring", from position 2, 4 characters long
alert( str11.substr(2) ); // "ringify", from position 2,

alert( str11.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters

//comparing strngs

alert( 'a' > 'Z' ); // true
alert( 'Österreich' > 'Zealand' ); // true

//str.codePointAt(pos)
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

//String.fromCodePoint(code)

alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

//str.localeCompare(str2)
alert( 'Österreich'.localeCompare('Zealand') ); // -1


                                                                 //arrays

let arr = new Array();
let arrr = [];

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

alert( fruits.length ); // 3
alert( fruits ); // Apple,Orange,Plum

let Arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( Arr[1].name ); // John

// get the function at index 3 and run it
Arr[3](); // hello

alert( fruits[fruits.length-1] ); // Plum
// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

let arr1 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr1.length; i++) {
  alert( arr1[i] );
}

let fruits1 = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits1) {
  alert( fruit );
}

let arr2 = ["Apple", "Orange", "Pear"];

for (let key in arr2) {
  alert( arr2[key] ); // Apple, Orange, Pear
}

fruits[123] = "Apple";
alert( fruits.length ); // 124

let arr3 = [1, 2, 3, 4, 5];

arr3.length = 2; // truncate to 2 elements
alert( arr3 ); // [1, 2]

arr3.length = 5; // return length back
alert( arr3[3] ); // undefined: the values do not return

let arr4 = new Array("Apple", "Pear", "etc");

let arr5 = new Array(2); // will it create an array of [2] ?
alert( arr5[0] ); // undefined! no elements.
alert( arr5.length ); // length 2

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2, the second value of the first inner array

let arr6 = [1, 2, 3];

alert( arr6 ); // 1,2,3
alert( String(arr6) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"

alert( [] == [] ); // false
alert( [0] == [0] ); // false

alert( 0 == [] ); // true
alert('0' == [] ); // false

alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0

                                                              //arrays methods

let arr7 = ["I", "go", "home"];

delete arr7[1]; // remove "go"

alert( arr7[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr7.length ); // 3

//arr.splice(start[, deleteCount, elem1, ..., elemN])
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"

let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5

arr.slice([start], [end])

let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

arr.concat(arg1, arg2...)
let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]

arr.forEach(function(item, index, array) {
  // ... do something with an item
});
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

                                                                //iterables

let range = {
  from: 1,
  to: 5
};


// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, and then 😂
}

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// the native method does not support surrogate pairs
alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)

                                                                  //Map and set

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );


