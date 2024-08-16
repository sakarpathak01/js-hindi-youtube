let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN (Not  a Number ) but type is number
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false;
//"hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(stringNumber);
// console.log(3+4*5%3)

console.log(2>=1);
const neroes=["shaktiman","naagraj","doga"]

let myObj = {
    name: "hitesh",
    age:22.
}

const myFunction=function(){
    console.log("Hello World");

}

let user={
    email:"user@gmail.com",
    upi:"user@ybl",
}
let userTwo=user

userTwo.email="hitesh@google.com"
console.log(user.email);
console.log(userTwo.email);