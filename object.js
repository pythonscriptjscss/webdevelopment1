//there are different type of objects;
const object1 = { "property1":"hello","property2":"hi"};
console.log(typeof(object1));

//we can also make an complex nested object

const students = {
    "ug1":{"numbers":17,"sub":"mathametics","performance":"good"},
    "ug2":{"numbers":22,"sub":"computerscience","performance":"well"}
};

//we can access the values in this way
console.log(students.ug1.numbers);
//or
console.log(students["ug1"]["numbers"]);
//or
let x = "ug1";
let y = "numbers";
console.log(students[x][y]);
let z = Symbol("hello");
console.log(typeof(z));
//we can make a function in an object like the below
const object2 = {radius:24,area:function calc(){
       return (this.radius ** 2) * 3.14 
}, perimeter: function find(){
    return (this.radius)*2*3.14
} };

console.log(object2.area());
console.log(object2.area);
console.log(object2.perimeter());
console.log(object2.perimeter);
