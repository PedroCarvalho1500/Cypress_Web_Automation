//Loops


/* for(statement1; statement2; statement3){

}*/


//for loop(for i loop)
for (let i=0; i<5; i+=1){
    console.log(i);
}


var cars = ["Volvo", "Toyota", "Tesla"];

for(let car of cars){
    console.log(car);

    //if(car == "Toyota"){
    //    break;
    //}
}

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car);
})