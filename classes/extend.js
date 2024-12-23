// class DateFormatter extends Date{
//     getFormattedDsate(){
//         const months=[
//             'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//         ];
//         return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
//     }
// }

// console.log(new DateFormatter('December 30, 2001 23:15:30').getFormattedDsate());

// class DateFormatter extends Date {
//     getFormattedDate() {
//       const months = [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec',
//       ];
//       return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
//     }
//   }
  
//   console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
//   // Expected output: "19-Aug-1975"

// function OldStyleClass(){
//     this.someProperty=1;
// }
// OldStyleClass.prototype.someMethod=function(){};

// class ChildClass extends OldStyleClass {}

// class ModernClass{
//     someProperty=1;
//     someMethod(){}
// }

// class AnotherChildClass extends ModernClass {}

// class SomeClass extends class{
//     constructor(){
//         console.log("Base Class/parent Class");
//     }
// }{
//     constructor(){
//         super();
//         console.log("derived class");
//     }
// }
// new SomeClass();

// class ParentClass {
//     constructor(){
//         return 1;
//     }
// }
// console.log('Parent Class',new ParentClass());

// class ChildClass extends ParentClass{
//     constructor(){
//         super();
//         return {};
//     }
// }
// console.log('Child Class',new ChildClass());

// Extending null

// TypeError: Super constructor null of anonymous class is not a constructor
// new(class extends null{})();

// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// new(class extends null{
//     constructor(){

//     }
// })();

// new (class extends null{
//     constructor(){
//         super();
//     }
// })();

// Examples from extends

// Extending Plain Objects

// const Animal={
//     speak(){
//         console.log(`${this.name} makes a noise`);
//     }
// }
// class Dog{
//     constructor(name){
//         this.name =name;
//     }
// }
// Object.setPrototypeOf(Dog.prototype,Animal);

// const d=new Dog("Pitbull");

// d.speak();

// Extending Object

// class C extends Object{
//     constructor(v) {
//         super(v);
//     }
// }

