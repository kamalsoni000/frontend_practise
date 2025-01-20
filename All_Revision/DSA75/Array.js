// 1. Given a string str consisting of characters such as '(', ')', '{', '}', '[' and ']', determine 
// if the input string is properly balanced.

// function isBalanced(str){
//     let stack=[];
//     const structure={
//         "}":"{",
//         ")":"(",
//         "]":"["
//     }

//     for (const char of str) {
//         if(char==="{" ||char==="(" || char ==="[" ){
//             stack.push(char);
//         }
//         else if(char==="}" ||char===")" || char ==="]" ){
//             if(stack.length ===0 || stack.pop() !== structure[char]){
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }


// // console.log(isBalanced("{[()]}")); // true
// console.log(isBalanced("{[(])}")); // false
// console.log(isBalanced("{[()]}[]")); // true
// console.log(isBalanced("{")); // false
// // console.log(isBalanced("")); // true

//  2 .Find Duplicates in Array :Given an array of integers numbers, determine whether the array contains any duplicate values.
//  A duplicate is defined as any number that appears more than once in the array.

// function isDuplicate(arr){
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         for (let innerIndex = index+1; innerIndex < arr.length; innerIndex++) {
//             const elementInner = arr[innerIndex];
//             if(element === elementInner){
//                 return true
//             }
//         }
//     }
//     return false;
// }

// console.log(isDuplicate([1,2,3]));

// 3. Find Missing Number in Sequence
//   Explanation :Given an array numbers of size n storing n different integers which fall within the range [0, n], implement a
//   function to identify the missing element in the array. All numbers except one are present in the array. Find the missing number.

// Input: numbers = [1,3,0]
// Output: 2

function findMissingNumberInSequence(numbers) {
    const size=numbers.length;
    const sortNum=numbers.sort((a,b)=>a-b)
    const fillAray=Array.from({length:size+1},(_,i)=>i);
    console.log('size',size,'fillAray',sortNum);  
    for (let index = 0; index < fillAray.length; index++) {
        const element = fillAray[index];
        if(fillAray[index] !== sortNum[index]){
            return element
        }
        
    }  
}

console.log('findMissingNumberInSequence',findMissingNumberInSequence([1,2,0]))