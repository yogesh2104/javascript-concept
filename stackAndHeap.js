// stack(Primitive) and Heap(nonprimitive)

// Whenever an object is created, it’s always stored in the Heap space, and stack
// memory contains the reference to it. Stack memory only contains local
// primitive variables and reference variables to objects in heap space.
// Objects stored in the heap are globally accessible whereas stack memory can’t 
// be accessed by other threads.
// Memory management in stack is done in LIFO manner whereas it’s more complex in
// Heap memory because it’s used globally.
// Stack memory is short-lived whereas heap memory lives from the start till the
// end of application execution.
// Heap memory is used by all the parts of the application, stack memory is used
// only by one thread of execution.


// ? Primitive type is what we declear we get of that variable and everything is store in stack


let myName ="Yogesh Singh"
let anotherName = myName

anotherName='Vishal Singh'

// console.log("anotehrName",anotherName);

let oneUser={
    email:'one@gmail.com',
    upi:'one@ybl'
}

let TwoUser=oneUser

TwoUser.email='two@gmail.com'


console.log("twoUser",TwoUser)

