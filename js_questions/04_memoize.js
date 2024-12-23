
// memoization in JS:

// -- Closures
// -- Higher-order Functions

// function salutation(){
//     let name= 'kamal';
//     function greet(){
//         console.log('hello'+name);
//     }
//     return greet;
// }
// let wish =salutation();
// wish();

// const add=(n)=>n+10;

// const memoAdd=()=>{
//     let cache ={};
//     return (n)=>{
//         if(n in cache) {
//             console.log('cache value');
//             return cache[n];
//         }else{
//             console.log('no cache value');
//             let result=n+10;
//             cache[n]=result;
//             return result;
//         }
//     }
    
// }
// const newAdd= memoAdd();

// console.log('adding',newAdd(3));
// console.log('adding',newAdd(3));
// console.log('adding',newAdd(3));

// const numbers=[1,23,1];

// const sum =numbers.reduce((total,currentValue,currentIndex,array)=>{
//     console.log('total',total,'currentValue',currentValue,'currentIndex',currentIndex,'array',array);
//     return total + currentValue
// },0);

// console.log('sum',sum);

// const numbers=[1,2,4,1111,5,6];

// const max=numbers.reduce((max,curr)=>{
//     if(4 < 2){
//         max=curr
//     }
//     return max;
// },0)
// console.log('max',max);

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });
  
//   promise.then((res) => {
//     console.log(res);
//   });
  
//   console.log(4);

//   4
// 1
// 2
// success
// timerStart
// timerend


function memoAdd(){
  let cache={};
  return function(...args){
    let key=args.map((i)=>i === undefined?'undefined':i===null?'null':i).toString();

    if(!!cache[key]){
      console.log('getting from cache',key);
      return cache[key];
    }else{
      const result=args.reduce((acc,curr)=>{

        return acc+curr;
      },0)
      cache[key]=result;
      return result;
    }

  }
}

const sum =memoAdd();

console.log('sum',sum(2,8));
console.log('sum',sum(2,8));
