const name = "hitesh";
const repoCount= 50

// console.log(name+repoCount+" value");
console.log(`Hello my name is ${name } and my repo cpunt is ${repoCount}`);
// String interpolation

// String declaration
const gameName = new String('hitesh-hc-com')


console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8, 4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))

console.log(gameName.split('-'));







