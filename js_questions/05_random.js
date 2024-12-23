// 

// console.log({name:'a'}=={name:'a'});

// const oldObject={
//     kml:'ll',
//     greet(){
//         console.log("greset");
//     }
// }

// const newObj=Object.create(oldObject);

// newObj.greet()
console.log("Start");


Promise.resolve().then(() => {
    console.log("Microtask 1");
    setTimeout(() => console.log("Macrotask 2"), 0);
});
setTimeout(() => console.log("Macrotask 1"), 0);

console.log("End");
