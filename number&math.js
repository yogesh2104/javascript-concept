const score= 400 // this is number type 
const balance = new Number(200) // an object that insure this value is always number in javascript

console.log("balance",balance.toString()) //this console convert into string after converting into string we have extra power off string method.
console.log("balance",balance.toFixed(2)) // this is most used number method this is return like 100.00 value after . is passed into toFixed(2)

// *************** Math Functions ****************

console.log(Math.abs(-8))  // this console return only positive number 
console.log(Math.rounde(4.6)) // this console return round value like if value after greater than .5  like 1.6 then we consider as 2 and less than .5 than 1 like left nearest number

console.log("min number",Math.min(4,5,3,2,4)) //return the  smallest set value 

console.log("max number",Math.max(4,5,7,9,2,10)) //this return larger value of set

// the most important one is Math.random() thsi return always value in between 0 and 1

console.log(Math.random()) //this return value between 0 and 1 

// like is have to generate number between 10 ant 20  so to this we use trick to generate number between 10 and 20 
const min =10 
const max =20
console.log(Math.floor(Math.random()*(max - min + 1) + min))