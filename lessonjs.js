//here we are telling about functions in javascript
//there a keyword is used 'function'
function areaCircle(radius){
 return 3.14*(radius**2);
};

//now suppose the radius of the circle is 6.7 unit

console.log(areaCircle(6.7));//it returns the area of the circle

//we can also assign a function to a variable
let perimeter = function periCircle(radius){
    return 3.14*2*radius;
};
//now we can call the variable instead of the function
console.log(perimeter(6.7));//here we used the same radius
// console.log(periCircle(6.7));//it will return us error

let hero = (function hi(){
    return "hero says him hi";
})();

console.log(hero);//here in this case we haven;t to use the parenthsis to the variable.