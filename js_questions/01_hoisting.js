// hoisting in Js Questions

// Function hoisting
// sayHello();

// function sayHello(){
//     console.log("hello");
// }

// Variable hoisting with var
// console.log(x);

// var x="kml";

// console.log(x);

// Variable hoisting with let and const
// console.log(x);
// let x="kml";
// console.log(x);

// Global Scope
// function kml(){
//     a=10;
//     let b=50;
// }
// kml();
// console.log(a);
// console.log(b);

// Function Scoped Variable
function kml(){
    console.log(name);
     var name="kml"
}
kml()

// x=10;
// console.log('x',x);
// let x=2;

// func();
// let func=()=>{
//     var a="kml"
//     console.log(a)
// }

// func(); 
// var func=()=>{
//     var a="kml";
//     console.log(a);

// }

// var variable=10;
// (()=>{
//   console.log(variable);
  
//   variable=20;

//   console.log(variable);
// })();

// console.log(variable);
// var variable=30;

// variable=10;
// (function(){
//     foo=100;
//     console.log(variable);
//     var foo=100;
//     variable=10;
//     console.log(variable);
// })();
// console.log(foo);
// console.log(variable);

// name='kmsl'
// function kml(){
//     name='aa';
//     console.log(name);

//     var name='kml';
//     console.log(name);
// }
// kml();
// console.log(name);

// for(var i=0; i<10;i++){
   
//     setTimeout(()=> console.log(i),0);
// }
// for(let i=0; i<10;i++){
   
//     setTimeout(()=> console.log(i),0);
// }

// this question

// var fullname="kamal soni";

// var obj={
//   fullname:"new kamal soni",
//   prop:{
//     fullname:'ajju',
//     getFullName: function() {
//         return this.fullname;
//     }
//   },
//   getFullName:function(){
//     return this.fullname;
//   },
//   getFullName2:()=>this.fullname,
//   getFullName3:(function(){
//     return this.fullname;
//   })(),
// }

// console.log(obj.fullname);
// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullName2());
// console.log(obj.getFullName3);

// a='aju';
// (function(){
//     console.log(a);
//     var a='kml';
//     console.log(a);
// })();
// console.log(a);

// .call(); in JS 
// function kml(name){
//     return(`hello ${name} and the nickname ${this.name}`);
// }
// let obj={
//     name:"ajju"
// };
// console.log(kml.call(obj,"kamal"));

// .apply() in JS
// function sum(a,b){
//     return a+b;
// }
// console.log(sum.apply(undefined,[2,3]));

// let person={
//     name:"ajju",
//     greet:()=>{
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// person.greet.call(person)
// // const greetFun=person.greet.bind(person);
// // greetFun();

// let obj={
//     name:"ajju",
//     sayName:function(){
//         console.log(this.name);
//     }
// }
// setTimeout(obj.sayName.bind(obj), 3000);

// object.create();
let obj= Object.create({
    name:"ajju"
});
console.log(obj.name);
delete obj.name;
console.log(obj.name);

// let obj={
//     name:"ajju",
//     sayName:function(){
//         console.log(this.name);
//     }
// }
// setTimeout(obj.sayName, 3000);
// setTimeout(()=>obj.sayName(), 1000);


// for(var i=0; i<10;i++){
   
//     console.log(i)
// }


// for(let i=0; i<10;i++){
   
//     setTimeout(()=> console.log(i),0);
// }

