// 1. Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element
//    of the array in order, passing in the return value from the calculation on the preceding element. The final result of running 
//    reducer across all elements of the array is a single value.
//    Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder, 
//    we shall instead implement it as Array.prototype.myReduce.

// const arr = [1, 2, 3, 4];
// const ans = arr.reduce((previous, currentvalue, currentIndex, array) => {
//     return previous + currentvalue;
// }, 0)
// console.log('ans', ans);


// /**
//  * @template T, U
//  * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
//  * @param {U} [initialValue]
//  * @return {Array<U>}
//  */
// Array.prototype.myReduce = function (callbackFn, initialValue) {

//     if (typeof callbackFn !== "function") {
//         throw new TypeError("Please in function")
//     }

//     let arr = this;
//     let startIndex = 0;
//     let initValAccumulator;
//     if (initialValue) {
//         initValAccumulator = initialValue;
//     } else {
//         initValAccumulator = arr?.[0];
//         startIndex = 1;
//     }
//     for (let i = startIndex; i < arr.length; i++) {
//         initValAccumulator = callbackFn(initValAccumulator, arr[i], i, arr);
//     }
//     return initValAccumulator;
// };

// const anss = arr.myReduce((previous, currentvalue, currentIndex, array) => {
//     return previous + currentvalue;
// }, 0)
// console.log('ans', anss);


// 2. classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together.
//  If you've written React applications, you likely have used a similar library.

// Implement the classnames function.

/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
// function classNames(...args) {
//     console.log('args',args);
//     let classes=[];
//     args.forEach((item)=>{
//         if(!item){
//             return;
//         }
//         const itemType=typeof item;
//         if(itemType ==="string" || itemType ==="number"){
//             classes.push(item);
//             return;
//         }
//         if(Array.isArray(item)){
//             console.log('item array',item);
//             classes.push(classNames(...item))
//             return;
//         }
//         if(itemType==="object"){
//             for (const key in item) {
//                 if (Object.hasOwn(item,key) && !!item[key]) {       
//                     classes.push(key);
//                 }
//             }
//             return;
//         }
//     })
//     return classes.join(" ");
// }

// console.log(classNames(null, false, 'bar', undefined, { baz: null }, '')); // 'foo bar baz quux'
// classNames("aa",{ 'foo-bar': true }); // 'foo-bar'
// classNames({ 'foo-bar': false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'

// 3. Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a
//  single level.

/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
// function flatten(value) {
//     let newArray=[];
//     value.forEach((item)=>{
//         if(Array.isArray(item)){
//            newArray=[...newArray,...flatten(item)];
//         }else{
//             newArray=[...newArray,item];
//         }
//     })
//     return newArray;

// }

// console.log(flatten([1,[2,3]]));

//4 . throttle

// function throttle(func,delay){
//     let throttle;
//     return function(...args){
//       if(!throttle){
//           func.apply(this,args);
//           throttle=true;
//           setTimeout(() => {
//               throttle=false;
//           }, delay);
//       }
//     }
//   }

//5 .Snake case to camel case

// const input="kamal_soni";
// const output="kamalSoni";
// input.charAt(0);
// function changeCamelCase(value){
//   const arrSplit=value.split("_").map((item,index)=>{
//     if(index===0){
//       return item;
//       }else{
//         return item.replace(item.charAt(0),item.charAt(0)?.toUpperCase());
//       }
//   });
//   console.log('arr',arrSplit);
//   return arrSplit.join("");
// }

// console.log(changeCamelCase("kamal_singh_soni"));

// 6. check a string in pallindrome or not

// const input="A man, a plan, a canal, Panama";

// function checkPallindrome(value){
//   const cleanStr=value.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
//   console.log('cleanstr',cleanStr);

//   let result=true;
//   for (let index = 0; index < cleanStr.length/2; index++) {
//     console.log(cleanStr[index],cleanStr[cleanStr.length -1 -index])
//     if(cleanStr[index]!==cleanStr[cleanStr.length -1 -index]){
//       result= false;
//     }
//   }
//   return result;
// }
// console.log(checkPallindrome(input));

// 8. Lexicographical comparison in string

// const input=['100','100000','1','1221','2','12'];

// const newArr=input.sort();
// console.log('newArr',newArr)

// 9.finding elements in an array that are greater than their neighbors in JavaScript:
// function findGreaterNeighbors(arr) {
//     return arr.reduce((previousValue,currentValue,index)=>{
//        if(index>0 && index < arr.length-1){
//         console.log(currentValue);
//         if(currentValue > arr[index-1] && currentValue > arr[index+1]){
//           previousValue.push(currentValue);
//         }
//        }  
//        return previousValue;
//     },[]);  
//     console.log('result',result);
// }
// function findGreaterNeighbors(arr) {
//   return arr.reduce((acc, curr, index) => {
//       // Check if current element is not the first or last element
//       if (index > 0 && index < arr.length - 1) {
//           // Check if the current element is greater than both neighbors
//           if (curr > arr[index - 1] && curr > arr[index + 1]) {
//               acc.push(curr);
//           }
//       }
//       return acc; // Return the accumulated result
//   }, []); // Initialize accumulator as an empty array
// }

// // Test the function
// const input = [1, 3, 2, 5, 4];
// const output = findGreaterNeighbors(input);
// console.log(output); // Output: [5]

// 10. Finding Greater number in js
               
// const input=[1000,400000,228,1000000,0];
// const output=[22];
// function findGreaterNumber(val){
//   let highest=val?.[0];
//   for (let index = 0; index < val.length; index++) {
   
//     if(highest < val[index+1]){
//       highest=val[index+1];
//     }
    
//   }
//   return highest;
// }
// console.log(findGreaterNumber(input));

// 11. How to Shuffle an Array using JavaScript ?

// function shuffleArray(arr){
//   const shuffled=arr.slice();
//   for (let index = shuffled.length-1; index > 0; index--) {
//     const element = shuffled[index];
//     const jIndex=Math.floor(Math.random()*(index+1));
//     console.log('Jindex',jIndex);
//     [shuffled[index],shuffled[jIndex]]=[shuffled[jIndex],shuffled[index]]
//    console.log([shuffled[index],shuffled[jIndex]])
//   }
//   return shuffled;
// }

// console.log('shuffleArray',shuffleArray([1,1,22,3,4]));


// 12 . swapping variables

// let x=10;
// let y=9;
// let arr=[1,7];
// [arr[1],arr[0]]=['l',arr[1]];

// console.log('x',arr)

// 13. reverse a string

// const name="kamalsoni";
// function reverseString(val){
//   return val.split("").reverse().join("");
// }

// function reverseString(val){
//   let newStr="";
//   for (let index = val.length-1; index >= 0; index--) {
//     const element = val[index];
//     newStr= newStr.concat(element);
//     console.log('element',element);
//   }
//   return newStr;
// }
// console.log('reverse',reverseString(name))

// 14. give this output

// const input=[{id:1,value:2},{id:2,value:22},{id:1,value:21}];
// const output=[{id:1,value:23},{id:2,value:22}];

// function changeOutput(arr){
//   const result=[];
//   arr.forEach((item,index)=>{
//    const Existing=result.find((i)=>i?.id===item?.id);
//    console.log('Existing',Existing);
//    if(Existing){
//     Existing.value += item.value
//    }else{
//     result.push({...item})
//    }
//   })
//   return result;
// }

// console.log('changeOutput',changeOutput(input));ds