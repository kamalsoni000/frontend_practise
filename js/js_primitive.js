// Primitive Types in JS

// JS has 6 Primitive Data Types : String, Number,bigInt, Boolean, undefined and symbol .
//  These type are immutable ,means their values cannot be altered.
// There is also a special Primitive Type called null,  which repersents the intentional absence of any object value.

// JS non-primitive types: It is also known as reference types , are object and derived data types.
//  Object and Array

// Global Scope 

// var globalVar="Im a global";

// function myFucntion(){
//     var funcitonVar="i am a  Fucntion";
//     if(true){
//         let blockVar="i am a block";
//         console.log('Block',blockVar);
//     }
//     // console.log('block not access',blockVar);
// }
// // console.log('funcitonVar',funcitonVar) // not accessible here 
// myFucntion(); 
// console.log('globalVar',globalVar);

// Block Scope
// if(true){
//     var blockScope ="I am a block scope";
//     console.log("blockScope",blockScope);
// }
// console.log("blockScope",blockScope);

const obj={
    name:"kamal"
};
Object.freeze(obj);

console.log('namer',obj.name);
obj.name="aaa";
console.log('namer',obj.name);



