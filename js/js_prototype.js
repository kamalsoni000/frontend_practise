// // Example of JS Prototype Inheritance

// let Car={
//     carModel:"Alto"
// }
// let Bike={
//     bikeModel:"Splendor"
// }
// let Showroom={
//     name:'Ajju ShowRoom'
// }

// // Old Browser way
// // Showroom.__proto__=Car;

// // Modern Way
// Object.setPrototypeOf(Showroom,Car);

// // with Object.create
// let NewShowroom=Object.create(Car);

// // console.log(NewShowroom.carModel);

// // Example of Prototype Chain in JS

// function Person(name){
//     this.name=name;
// }
// Function.prototype.greet=function(){
//     console.log(`Hello ${this.name} How are you ?`);
// }
// const res=new Person();
// Person.greet()

// // console.log(res.__proto__ === Person.prototype);

// // console.log(Person.prototype.__proto__ === Object.prototype)
// // console.log(Object.prototype.__proto__); 

// let arr=[1,2,3];

// let Obj={
//     age:12,
// }

// let str="kamal";

// function kml(a){
//     this.a=a;
//   console.log('kml');
// }
// Object.prototype.jaati=function(){
//     console.log('jaati is Soni')
// }
// Array.prototype.jaati=function(){
//     console.log('jaati is Soni')
// }
// String.prototype.jaati=function(){
//     console.log('jaati is Soni')
// }
// Function.prototype.jaati=function(){
//     console.log('jaati is Soni')
// }
// Obj.jaati();
// str.jaati();
// kml.jaati();
// arr.jaati();