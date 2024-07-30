//there are arithmatic operators like +, -, *, /, **, %, ++, --
//we have already use them in the c language and it is same as they were.Here the % works as the modulus operator to print the remainder
//there are assignment operators like =, +=, -=, *=, /= etc.
//there are more operators which are called the comparison operator. they are ==,===,!=,!==,>,<,>=,<= and thats it.But here the == check the equality of value between the two variables,if they are of different type then transfer
//them to same data type then compare.And the === opeator matches the value as well as the data types also if these two get matched then it returns boolean value true.
//now introducing for-of loop
let str = "what is your name";
let size = 0;
for(let val of str){
    console.log(val);
    size++;
}
//this for-of loop is used for the strings and arrays
console.log(size);
//but for the obbjects there is another loop which is called for-in loop
let student = {
    name:"sayan mandal",
    semester: "third",
    roll:259,
    age:19
};

for(let key in student){
    console.log(key,"=",student[key]);
}

//here are some excercises
//print all the even numbers from 0 to 100

for(let i = 0;i<=100;i++){
    if(i%2 == 0){
        console.log(i);
    }
}