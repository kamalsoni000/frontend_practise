// 1.How to compare object with value

    // function areObjectEqual(obj1,obj2){
    //     return JSON.stringify(obj1) === JSON.stringify(obj2);
    // }

    // let obj1={name:'kamal'};
    // let obj2={name:"kamal"};

    // console.log(areObjectEqual(obj1,obj2));

// 2.Random

    // console.log(1+'2'-1);

// 3.Does primitive value has any prototype

    // console.log((1).toString());

    // console.log((1).__proto__);

// 4. What will be the output of the below code ?

// class Person {}
// class Employee extends Person {}
// class Developer extends Employee {}
// const tom = new Developer();
// console.log(Object.getPrototypeOf(tom) === Developer.prototype); // T    
// console.log(Object.getPrototypeOf(tom) === Employee.prototype); // F
// console.log(Developer.isPrototypeOf(tom)); // F
// console.log(Developer.prototype.isPrototypeOf(tom)); // T
// console.log(Employee.prototype.isPrototypeOf(tom)); // T
// console.log(Person.prototype.isPrototypeOf(tom)); // T
// console.log(Object.prototype.isPrototypeOf(tom)); // T

// 5. What will be the output of the below code ?

// var myObject = {
//     foo: "bar",
//     func: function () {
//       var self = this;
//       console.log("outer func:  this.foo = " + this.foo);
//       console.log("outer func:  self.foo = " + self.foo);
//       (function () {
//         console.log("inner func:  this.foo = " + this.foo);
//         console.log("inner func:  self.foo = " + self.foo);
//       })();
//     },
//   };
//   myObject.func();

//6 .What will be the output of the below code ?

// var a = {},
//   b = { key: "b" },
//   c = { key: "c" };
// a[b] = 123;
// a[c] = 456;

// console.log(a[{}]);

// 7.What will be the output of the below code ?
// var obj1 = {
//     fname: "Ramu",
//     getName: () => this.fname,
//   };
//   var obj2 = {
//     fname: "Shamu",
//     getName: function () {
//       return this.fname;
//     },
//   };
//   console.log(obj1.getName.apply(obj2)); // und
//   console.log(obj1.getName()); // undefined
//   console.log(obj2.getName()); // '' shamu
//   console.log(obj2.getName.apply(obj1)); // ranmu
//   const getName1 = obj1.getName;
//   console.log(getName1()); // und
//   const getName2 = obj2.getName; // 
//   console.log(getName2()); // un

// 8 . Guess the output

// var a = 80;
// function b() {
//   var c = 10;
//   console.log(a); // undefined
//   var a = 40;
//   console.log(a); // 40
// }
// b();
// console.log(a); // 80
// console.log(c); // reference err

// 9. Guess the output

// const obj = {
//     dev: "bfe",
//     a: function () {
//       return this.dev;
//     },
//     b() {
//       return this.dev;
//     },
//     c: () => {
//       return this.dev;
//     },
//     d: function () {
//       return (() => {
//         return this.dev;
//       })();
//     },
//     e: function () {
//       return this.b();
//     },
//     f: function () {
//       return this.b;
//     },
//     g: function () {
//       return this.c();
//     },
//     h: function () {
//       return this.c;
//     },
//     i: function () {
//       return () => {
//         return this.dev;
//       };
//     },
//   };
//   console.log(obj.a()); // bfe
//   console.log(obj.b()); // bfe
//   console.log(obj.c()); // und
//   console.log(obj.d()); // bfe
//   console.log(obj.e()); // bfe
//   console.log(obj.f()()); // und
//   console.log(obj.g()); // und
//   console.log(obj.h()()); // und
//   console.log(obj.i()()); // bfe

// 10. 

// function Person() {
//     this.name = "Yomesh";
//     return this;
//   }
//   var person = new Person();
//   console.log(person.name); //Yomesh

// 11 

// function Car() {
//     this.name = "BMW";
//     return this.name;
//   }
//   var car = new Car();
//   console.log(car.name);

//12 

// function Animal() {
//   var animals = [];
//   animals.push("tiger");
//   animals.alive = true;
//   return animals;
// }
// var animals = new Animal();
// console.log(animals.alive, Array.isArray(animals), animals[0] === "tiger");

// 13
// function m(){
//     this.a="am"
//     const obj={
//         a:'ass',
//         getA:()=>{
//             return this.a;
//         }
//     }
//     console.log('a',obj.getA());
// }
// m();

// 14.
// function Rocket() {
//   var rocket = () => {
//     console.log("I am an rocket");
//   };
//   this.engines = 4;
//   return rocket;
// }
// var rocket = new Rocket();
// rocket();
// console.log(rocket.engines);

// 15 .
// var person = {};
// ({ name: person["username"] } = {
//   username: "yomeshgupta",
//   email: "team@devtools.tech",
//   name: "yomesh",
// });
// console.log(person.username, person.name);

// 16 . Js Closure Questions

// count() //1
// count() //2
// count.reset() //0
// count() //0
// count() //1

// const count= (()=>{
//     let counter=0;
//     const getCount=()=>{
//         return ++counter;
//     }
//     getCount.reset=function(){
//         counter=0;
//         return counter;
//     }
//     return getCount
// })();
// console.log(count());
// console.log(count());
// console.log(count.reset());
// console.log(count());

// 17. post and pre in js 
      
    // post : If it is placed after the operand , it returns  the value before the increment a++
    // pre  : If it is placed before  the operand , it returns the value after the increment ++a.

    // ex : post
    //    let y=5;
    //    let x=y++;

    //    console.log('y',y++);
    //    console.log('x',x);

    // pre 
        // let y=5;
        // let x=++y;
        // console.log('y',y);
        // console.log('x',x);


        // let a = 10;
        // console.log(a++); // ? 10
        // console.log(a);   // ? 11
        
        // let b = 20;
        // console.log(++b); // ? 21
        // console.log(b);   // ? 21

//         let c = 5;
// let d = c++ + 10; // ? 15
// console.log(d);   // ?  15
// console.log(c);   // ? 6

// let e = 5;
// let f = ++e + 10; // ? 16
// console.log(f);   // ? 16
// console.log(e);   // ? 6

// for (let i = 0; i < 5; i++) {
//     console.log(i); // What will this print?
// }

// for (let j = 0; j < 5; ++j) {
//     console.log(j); // How is this different from the previous example?
// }
// let g = 5;
// console.log(g++ + g++); // ? 10 
// console.log(g);         // ? 7

// let h = 5;
// console.log(++h + ++h); // ? 13
// console.log(h);         // ? 7


// let i = 1;
// let result = ++i + i++ + ++i; // ? 2 2 4
// console.log(result);         // ? 
// console.log(i);              // ? 

// Prefix (++i) increments the variable before using its value.
// Postfix (i++) uses the current value before incrementing the variable.
// let j = 0;
// if (j++ && ++j) {
//     console.log("True"); // Will this execute?
// } else {
//     console.log("False");
// }

// function increment(x) {
//     return x++;
// }

// let k = 5;
// console.log('k',k)
// console.log(increment(k)); // ? 
// console.log(k);            // ?
// let arr = [10, 20, 30];
// let index = 0;

// console.log(arr[index++]); // ? 
// console.log(arr[++index]); // ?


// 18 .normalize the object in js

// const arrObj=[
//     {group:'a',label:"new a"},
//     {group:'c',label:"new cs"},
//     {group:'b',label:"new sa"},
//     {group:'b',label:"new sa"},
//     {group:'c',label:"new assd"}
// ]

// function normalizeObject(arr){
//   let output ={};
    
//   arr.forEach(({group,label})=>{
//     if(!output[group]){
//         // output={...output,[group]:[]};
//         output[group]=[];
//     }
//     output[group]=[...output[group],{group,label}];
//   })
//   return output;
// }

// console.log(normalizeObject(arrObj));

// 19. memoize function in JS

// function memoize(fun){
//     let result={};
//     return (...args)=>{
//         console.log('args',args);
//         const argsKey=JSON.stringify(args);
//         console.log('argsKey',argsKey);
//         if(!result[argsKey]){
//             result[argsKey]=fun(...args);
//         }
//         console.log('result',result);
//         return  result[argsKey];
//     }
// }


// const slowerFun=memoize((val)=>{
//     let result=0;
//     for (let i = 1; i <= val; i++) {
//         for (let j = 1; j <= val; j++) {
//             result++;            
//         }
//     }
//     return result;
// });
// console.log('hellso');
// console.log(slowerFun(9999));
// console.log(slowerFun(9999));

