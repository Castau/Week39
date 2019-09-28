//'use strict';
//opg 1a
console.log('opg 1a');

let names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Eva"];
function namefilter(name) {
    if (name.includes('a'))
        return name;
}
let filterarray = names.filter(namefilter);
console.log(filterarray);

// opg 1b
console.log('opg 1b');

function reversenames(name) {
    return name.split('').reverse().join('');
}
let reversearray = names.map(reversenames);
console.log(reversearray);

// opg 2a
console.log('opg 2a');
function myFilter(arraytofilter, callback) {
    let returnarray = [];
    arraytofilter.forEach(item => {
        let filtereditem = callback(item);
        if (filtereditem !== undefined) {
            returnarray.push(callback(item));
        }
    });
    return returnarray;
}

function actualfilter(item) {
    if (item.includes('a')) {
        return item;
    }
    return undefined;
}
console.log(myFilter(names, actualfilter));

// opg 2b
console.log('opg 2b');

function myMap(arraytomap, callback) {
    let returnarray = [];
    arraytomap.forEach(item => {
        returnarray.push(callback(item));
    });
    return returnarray;
}

function reverseitem(item) {
    return item.toString().split('').reverse().join('');
}

console.log(myMap(names, reverseitem));

// opg 3
console.log('opg 3');

Array.prototype.myFilterV2 = function (callback) {
    let returnarray = [];
    this.forEach(item => {
        let filtereditem = callback(item);
        if (filtereditem !== undefined) {
            returnarray.push(callback(item));
        }
    });
    return returnarray;
}

Array.prototype.myMapV2 = function (callback) {
    let returnarray = [];
    this.forEach(item => {
        returnarray.push(callback(item));
    });
    return returnarray;
}

console.log(names.myFilterV2(actualfilter));
console.log(names.myMapV2(reverseitem));

// opg 4a
console.log('opg 4a');

let numbers = [1, 3, 5, 10, 11];

function addindex(current, index, array) {
    if (index >= array.length - 1) {
        return current;
    }
    return current + array[index + 1];
}

console.log(numbers.map(addindex));

// opg 4b
console.log('opg 4b');

function atags(current, index, array) {
    if (index === 0) {
        return '<nav><a href=””>'.concat(current, '</a>');
    }
    else if (index === array.length - 1) {
        return '<a href=””>'.concat(current, '</a></nav>');
    }
    return '<a href=””>'.concat(current, '</a>');
}

console.log(names.map(atags));

// opg 4c
console.log('opg 4c');

let namesjson = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

function tablecreator(current, index, array) {
    let result = '<tr><td>' + current.name + '</td><td>' + current.phone + '</td></tr>';

    if (index === 0) {
        result = '<table><tr><th>' + Object.keys(current)[0] + '</th><th>' + Object.keys(current)[1] + '</th></tr>' + result;
    }
    else if (index === array.length - 1) {
        result = result + '</table>';
    }
    return result;
}
console.log(namesjson.map(tablecreator).join(''));

// opg 4d
console.log('opg 4d');
console.log('uncomment to test in browser');
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("tablediv").innerHTML = namesjson.map(tablecreator).join('');  
// });

// opg 4e
console.log('opg 4e');
console.log('uncomment to test in browser');
// document.getElementById("submit").addEventListener("click", function () {
//     let filtered = namesjson.filter(function(item){
//         return item.name.includes('a');
//     });
//     document.getElementById("tablediv").innerHTML = filtered.map(tablecreator).join('');
// });

// opg 5a
console.log('opg 5a');

let all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(','));
console.log(all.join(' '));
console.log(all.join('#'));

// opg 5b
console.log('opg 5b');
numbers5 = [2, 3, 67, 33];

let result = numbers5.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(result);

// opg 5c
console.log('opg 5c');

let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];

let ageaverage = members.reduce((total, member, index, array) => {
    total = total + member.age;
    if (index === array.length - 1) {
        return total / array.length;
    } else {
        return total;
    }
}, 0);

console.log(ageaverage);

// opg 5d
console.log('opg 5d');

let votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

let votecountarray = votes.reduce((tally, vote) => {
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {});

console.log(votecountarray);

// opg 6
console.log('opg 6');

// Uses of variable and function before declarations
hoistedvariable = 87;
console.log(hoistedvariable);

var resultofhoistedfunction = hoistedfunction(hoistedvariable);
console.log(resultofhoistedfunction);

// Declarations
function hoistedfunction(num) {
    return num + 1;
}

var hoistedvariable;

// Explain
//
// What hoisting is?
// Hoisting is the default behaviour, all declarations are moved to the top of the scope (script or function)
// the top of the scope (script or function). Assignments are NOT moved. Because of this, all variable- and
// value declarations and assignments should be kept together, preferably at the top of the current scope. 
// Functions are hoisted completely. 
// What is the difference between the keyword var and the ES6 keyword let?
// Variables declared with the let keyword can have Block Scope, which means that variables declared inside a
// block {} can not be accessed from outside the block, unlike var. let and const variables are NOT hoisted. 

// opg 7
console.log('opg 7');

// 'this' refers to the owner object, someobj
// the function is a method with an object associated
let someobj = {
    name: "Hattemager",
    somefunction: function (newname) {
        this.name = newname;
    }
}
console.log(someobj.name);
someobj.somefunction('Fiskemager');
console.log(someobj.name);

// 'this' refers to the global object (module.exports in node.js)
// the function is a just a function _without_ an object associated
function otherfunction(newername) {
    this.name = newername;
    if (this !== global) {
        console.log(this);
    }
};

// examples above are implicit bound. Explicit binding is when
// a context is explicitly bound to a function, with call(), apply() or bind. 

otherfunction(); // refers to global object
otherfunction.call(someobj, 'Rigmor'); // refers to someobj

// How this in JavaScript differ from this in Java?
// In JavaScript 'this' refers to different values depending on where it is used:
// * In a method (a function with an object associated with it), 'this' refers to the owner object.
// * Alone, 'this' refers to the global object.
// * In a function (no object is associated with it), 'this' refers to the global object.
// * In an event, 'this' refers to the element that received the event.
// In Java, 'this' refers to the current instance object on which the method is executed. All 
// methods are associated with an object in Java. 

// The purpose of the methods call(), apply() and bind()
// call() and apply() are similar, they both take in an object which then 
// becomes the object 'this' refers to. call additionally takes in a list
// of arguments that are passed to the function using the call() method. In 
// the argument is a single array of arguments instead of a list. 
// When bind() is called on a function it creates a new function with the same
// body and scope as the original function, but with 'this' now permanently bound
// to the first argument of bind. 

// opg 8a
console.log('opg 8a');

var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
console.log(add()); 

// opg 8b
console.log('opg 8b');
let person = function () {
    let name;
    let age;
    function setage(newage) {
        age = newage;
    }
    function setname(newname) {
        name = newname;
    }
    return {
        info: function () {
            return "name: " + name + ", age: " + age;
        },
        setAge: function (newage) {
            setage(newage);
        },
        setName: function (newname) {
            setname(newname);
        }
    };
};

var person1 = person();
console.log(person1);
person1.setAge(32);
person1.setName("Rigmor");

console.log(person1.info()); 
