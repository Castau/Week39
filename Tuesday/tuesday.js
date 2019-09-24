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

var numbers = [1, 3, 5, 10, 11];

function addindex(current, index, array){
    if(index >= array.length - 1){
        return current;
    }
    return current + array[index +1];
}

console.log(numbers.map(addindex));

// opg 4b
console.log('opg 4b');

function atags(current, index, array){
    if(index === 0){
        return '<nav><a href=””>'.concat(current, '</a>');
    }
    else if(index === array.length-1){
        return '<a href=””>'.concat(current, '</a></nav>');
    }
    return '<a href=””>'.concat(current, '</a>');
}

console.log(names.map(atags));

// opg 4c
console.log('opg 4c');

var namesjson = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function tablecreator(current, index, array){
    let result = '<tr><td>'+ current.name + '</td><td>' + current.phone + '</td></tr>';
    
    if(index === 0){
        result = '<table><tr><th>' + Object.keys(current)[0] + '</th><th>' + Object.keys(current)[1] + '</th></tr>' + result;
    }
    else if (index === array.length-1) {
        result = result + '</table>';
    }
    return result;
}
console.log(namesjson.map(tablecreator).join(''));

// opg 4d
console.log('opg 4d');

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("tablediv").innerHTML = namesjson.map(tablecreator).join('');  
});

// opg 4e
console.log('opg 4e');

document.getElementById("submit").addEventListener("click", function () {
    let filtered = namesjson.filter(function(item){
        return item.name.includes('a');
    });
    document.getElementById("tablediv").innerHTML = filtered.map(tablecreator).join('');
});

