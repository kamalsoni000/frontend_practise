// Es6 

// 1.let keyword
// 2.const keyword
// 3.Arrow Fucntions
// 4.Destucturing Assignment 
// Example : 
// const obj={name:"kamal",age:20};
// const {name,age}=obj;
// console.log('name',name,'age',age);

// const arr = [1, 3, 3];
// const [First, Second] =arr;
// console.log('First',First,Second)

// 5. Spread operator
// 6. For/Of loop
// const a=['first','second','third'];

// for(const keys of a){
//     console.log('key is:',keys);
// }

// const a="kamal";

// for(const str of a){
//     console.log('str',str);
// }

// 7. Maps and Sets 
// Maps : It store key-value pairs where keys can be any data type

// const map=new Map();
// map.set('First','kamal');
// map.set('Second','Ajju');
// console.log('Map is:','first',map.get("First"));

// Sets : It Store unique values of any type.
//    const set=new Set([1,2,2,3,3,3]);
//    console.log('set',set);

// 8. Classes
// 9.Promises
// 10.Default Parameters


// Js Hoisting 
// It is the Behavior where the interpreter moves function and variable declarations to
// the top of their respective scope before executing the code.

// console.log('kml',kml); // throws undefined
// var kml='kamal';

// Function Scope
// kml()
// function kml(){
//     var name="kmla";
//     console.log(name);
// }

// with let

// let age=12;
// console.log('age is:',age);

// this keyword in Js
// It refers to the object it belongs to.
// its value is determined by how a function is called, making it a dynamic reference

// const person={
//     name:"kamal soni",
//     greet(){
//         return `hello ${this.name} how are you`
//     }
// }
// const gre=person.greet;
// console.log(person.greet())

// function greet(){
//     console.log(`hello ${this.name}`)
// }
// const person={
//     name:"kamal",
//     sayHello:greet
// }


// const anotherPerson={
//     name:"ajju"
// }
// greet();
// person.sayHello();
// greet.call(anotherPerson);

// console.log({});

// Explicit Binding
// call ,apply,bind 
// .call(thisArg,arg1,arg2,...)// Takes argument individually
// .apply(thisArg,[argsArray]) // Takes argument as an array

// function add(a,b){
//     return a+b;
// }

// console.log(add.call({},1,2));
// console.log(add.apply({},[2,2]));

// Debounce vs throttle

// Debouncing : It is a techniquie used to ensure that a function is only executed after a certain
// amount of time has passed since it was last invoked 
// This is particularly usefule when handling user input events like keypresses or mouse movements.

// Throttling ensures that a function is called at most once in a speciefied time interval.



// SetTimeout vs SetInterval

// observe paatern : we can subscribe certain objects, the observers , to another object , called the observable.

// class observable{
//     constructor(){
//         this.observers=[];
//     }
//     subscribe(func){
//         this.observers.push(func);
//     }
//     unsubscribe(func){
//         this.observers=this.observers.filter((obs)=>obs!==func);
//     }
//     notify(data){
//         this.observers.forEach((obs)=>obs(data));
//     }
// }

// promise.all V/S promise.allSettled in JS

// Promise.all : It wait for all Promises to resolve and fails fast if any promise rejects , returning a single 
// rejected promise.

// const promise1=Promise.resolve(1);
// const promise2=2;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(reject,1000,"res");
// });

// Promise.all([promise1,promise2,promise3]).then((val)=>{
//     console.log('values is:',val);
// }).catch((err)=>{
//     console.log('err is:',err);
// })

// Promise.allSettled() : Its takes an iterable of prommises and return a single promise that resolves when all of the
// input  promises have settled(either resolved or rejected).

// const promise1=Promise.resolve(1);
// const promise2=2;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(reject,3000,"res");
// });

// Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
//     console.log('res',res);
// }).catch((err)=>{
//     console.log('err',err);
// })

