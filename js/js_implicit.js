// Implicit, Explicit, Nominal, Structuring and Duck Typing

// let person = {
//     name: "John",
//     sayHello: function() {
//       console.log("Hello, " + this.name + "!");
//     }
//   };
//   const na= person.sayHello;
//   na()

// Implicit : implicit behavior refers to actions that occur automatically without being explicitly stated in the code. like Type coercion

// // Global scope
// function foo() {
//     bar = 10;
//   }
//   foo();
//   console.log(bar); // 
  

// Explicit : It Invloves manually converting a value from one type to another using fucntions like Number(),string() or Boolean().

// function foo() {
//   var x=1;
//   let y=2;
//   const z=3;
//   console.log(x,y,z);
// }

// foo();

// Nominal In JS: JS doesn't support nominal typing , where types are explicity declared and checked . However ,TS , a supserset od JS,
// brings this feature to help catch errors during development.

// Structuring Typing : It refers to the process of organizing a codde into logical and resuable parts. 

// Duck Typing : It refers to a programming concept where the type or interface of an object is determined by its behavior (method or properties it has)
//  rather than the object's actual class or inheritance heirarchy.

// For example:

function quack(duck){
    if(duck.quak){
        duck.quak();
    }else{
        console.log('Not a Duck');
    }
}

const realDuck={
    quak:()=>{
        console.log("Quack");
    }
}

const fakeDuck={
    quck:()=>{
        console.log("Quack");
    }
}
quack(realDuck);
quack(fakeDuck);