//Conactination and Interpolation

var price = 80;
var itemName = "Table";
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars"; //conctatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`; //Interpolation
console.log(messageToPrint);
console.log(messageToPrint2);