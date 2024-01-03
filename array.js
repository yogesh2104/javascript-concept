//array 

// let myArr= [1,2,3,4,5,true,null]

//in javascript array are resizable and mixed type 
// javascript array copy operation are shallow copy not deep copy
// shallow copy is share same refrence point as those of the source object form which copy was made
// means when i have change copy array its change original aarray value
// ohter hand deep copy not share same refrence point ant not change original array


// array method 
// push value in array 
const myarray= [1,2,3,4,5]
// myarray.push(7)
// console.log("array", myarray)

const myarr=new Array(1,2,3,4,5)
// console.log("myarr", myarr)

// console.log("POP arr",myarr.pop()) // remove last element
// unshift and shift
// includes ---> this return true are false 
// join() ---> this join two array and return stings type

// const newArr=[1,2,3,4,5]
// const arr2 = [5,6,7,9]
// const joinArr=newArr.join()

// console.log(joinArr)

//slice,splice

const myArr1 = Array.of
// console.log(myArr1.slice()) // return section of array two param need start and end and most important slice not modify original array
// otherhand splice change original array 
// concat ----> combine tow or more array this return new array without modifying exiting array
// spread operater we use (...) three dot to spreade all value
// flat(number of depth, simply infinity) ----> return new array with all sub-array element concatenated into it recursively up to the specified depth
// isArray ----> return true and false
// from -----> this convert into array if we use from on object return empty array [] if not able to convert into array 
// of ----> return new array from set of element.



