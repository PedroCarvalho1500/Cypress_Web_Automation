//Declarative function
function helloOne(){
    console.log("Hello one!");
}


helloOne();


//anonymous function
var helloTwo = function(){
    console.log('Hello two!');
}


helloTwo();


//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!');
}

helloThree()


//Function with arguments
function printName(name){
    console.log(name)
}


printName('James');

import {printAge} from '../helpers/printHelper.js'

printAge(27);

//import * as helper from '../helpers/printHelper.js'