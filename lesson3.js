// we are learning strings now
let str = "My name is sayan mandal";
console.log(str.length);
console.log(str[5]);//as in python it returns the value at index 5
for(let val of str){
    console.log(val);
}

//now we see the template literals in js
//the another way to write strings
let sentence = `My name is Sayan Mandal`;
console.log(sentence);
let object1 = {
    item : "pen",
    price : 10
}
console.log("The cost of",object1.item,"is",object1.price,"rupees");
//instead of writing this we can use the temmplate literals which is as same as f strings in python programming language
let output = `The cost of this ${object1.item} is ${object1.price} rupees`;
console.log(output);
//In terminology it is called the string interpolation
//Here in JS there are usage of escape characters which seems like \n for new line \t for tab etc.
//Though there is two component in an escape character but still during counting length we have to calculate this two as one 
