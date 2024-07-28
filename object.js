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