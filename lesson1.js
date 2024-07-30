const yourFirstVariable = 10;//this naming convention is known as the camel case naming convention
const your_first_variable = 10;//this naming convention is known as the snake case naming convention
const yourfirstvariable = 10;//this naming convention is known as the lower case naming convention
const YourFirstVariable = 10;//this naming convention is known as the pascal case naming convention
const Your_First_Variable = 10;//this naming convention is known as the constant case naming convention
const variable1 = 10;
const variable2 = 'hello my boy here';
const variable3 = 'tomm';
const variable4 = variable1;
const variable5 = {firstproperty:'hello',secondproperty:"hi"};//this is called objects in JS
const variable6 = (function()
{
    return "hello my name is";
})();
const variable7 = variable6 + variable3;
const variable8 = false;
const variable9 = [10,20,30,45,0.88,66]; // this is how an array is called in JS
console.log(variable9);console.log(variable9[3]);//like python lists
console.log(variable7);
console.log(variable6);

//more functions
const number1 = '10'; const number2 = 20;
//here if we try to concatenate the two variables then the compiler automatically make the numbre 20 a string and concatenate this to 10
const result = number1 + number2;
console.log(result); //see here the output will be 1020
//but we can use the number function to make a string a number and then add them 
const result2 = Number(number1) + number2;
console.log(result2) //here it shows 30

//here how to retrieve data from an object
console.log(variable5.firstproperty);
//or
console.log(variable5['firstproperty']);

//now we talk about JavaScript operator in the lesson2


