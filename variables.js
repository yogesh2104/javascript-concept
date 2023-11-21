// in ja file find const , let, var compiler  store value in momery 

const accoutId=12123  //when you try to update the variable you got error TypeError: Assignment to constant variable. and const is block level variable 
let accountName = "Yogesh Singh" // you can chage the value of this variable beacuse let keyword can modify there value after declaration this is a block level variable 
var passWord = "122123ddsgd" // you can chage the value of this variable this is a not block level variable. this is a global variable
accountCity = "Mumbai"

/*
Prefer to not use var keyword beacuse od issue in block scope and functional scope
 */
// console.log("accountCity: " + accountName);

let accountState;

// in javascript if you initialize variable not give value then compiler give undefined value and not undefined and not define both or different

