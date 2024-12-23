// const obj={
//     a:1,
//     b:3,
//     c:()=>{
//         console.log(this.a,this);
//         return this.a
//     },
//     d:function(){
//         console.log(this.a,this);
//         return this.a
//     }
// }
// obj.c();
// obj.d();

// event loop 

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 3000);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");