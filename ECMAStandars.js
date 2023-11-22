"use strict"; // ! trate all JS code as newer versions of JavaScript

// alert("add",3+3) // we are use nodejs not browser we can't use alret function in node js you got alert is not defined because alret function is ddocument object not node object

// for official documentation https://tc39.es/ecma262/#sec-intro


let name='Yoegsh'
let age=23
let isLoggedIn=false


// Javascript DataTypes
// number =>2 to the power 62
// bigint =>
// string => "" | ''
// boolean => true | false
// null => standalone value
// undefined =>
// object =>
// symbol => fint unique value mostly used in react to identify reactjs components unique 


// javascript converstion
let score=40

// console.log(typeof score); //? number

let score2='40'

// console.log(typeof score2); //? string

let score3='40sdf'
let StingToNumber=Number(score3)

// console.log(typeof StingToNumber); //? number but this is not actually number this is NaN(Not a number) because compler not able to convert string to number

// if convert into number with Number()
// "33"=>33
// "34BC"=> NaN(Not a number)
// true => 1 | false => 0
// null => 0
// undefined => NaN

// if convet into Boolean

let IsLoggedInBoool=undefined

// console.log(Boolean(IsLoggedInBoool))

// 1 => true | 0 => false
// "" => false
// "Yogesh" => true
// null => false
// undefined => false

// if convert into String we use String() method


// *********** operation **************

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

// console.log(2+2) //!4
// console.log(2+'2') //!22
// console.log('2'+2) //!22
// console.log('1'+2+2) //! 122
// console.log(1+2+'2') //!32



// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// console.log(null>0) //false
// console.log(null==0) //false
// console.log(null>=0) //true

// null>0 ===> true because the reason is that an equality check == and comparison > <>= <= work differently. comparison convert null to number treating it as 0 thats why true and null>0 ===>false

//* datatype summary
// ? Primitive Data Type
// 7 type :- Strign,Number,Boolean,Null, undefined, BigInt, Symbol

//! With Primitive Data when we use it give as copy , not original memory location when we change it change in copy .


//* Non-primitive(refrence Type)
//? 2 type :- Array,Object,function
//! with non-primitive data type when we call its give as memory reference 


// *********** Typeof result  **************

// ?undefined = "undefined";
// !null = "object";
//? Boolean=Boolean;
//? Number=Number;
// ?String=String;
// ?Object(native and does not impolement[[call]]) ="object";

// ?Object(native or host and does not impolement[[call]]) ="function";


// ?Object(host and does not impolement[[call]]) ="Impelment-defined except may not be "undefinded","boolean", "number", "string" ";

// https://262.ecma-international.org/5.1/#sec-11.4.3   //for details 
