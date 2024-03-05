// to declearobject in javascript we have to way first literals and constructor methods
// singleton constructor when we create javascript object with literals then object is not singleton when we create object with constructor then object is singleton
// Object.create() // this the sinleton method to create onbject in javascript
const mySymbol = Symbol("mySymbol");
const myObj={
    "name":"Yogesh",
    [mySymbol]:"Yogesh Singh",
    "age":23,
    "location":"Mumbai",
    "email":"singhyo@gmail.com",
    "isLoggedIn":false,
    "lastLoginDay":["Monday", "Tuesday", "Wednesday", "Saturday"]
}
// console.log(myObj)
// console.log(myObj["email"])
// console.log(myObj.email)
// console.log(myObj[mySymbol])
// console.log(typeof mySymbol)


//override value

// myObj.email = "signyogesh2104@gmail.com"
// console.log(myObj)

const singletonObject =new Object();
// console.log(singletonObject)
singletonObject.email = "signyogesh2104@gmail.com"
singletonObject.lastLoginDay =["Monday", "Tuesday"]
singletonObject.login=false

const obj1={a:"a",b:"b",c:"c"}
const obj2={d:"a",e:"b",f:"c"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

console.log(singletonObject)

