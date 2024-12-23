//  ------------------ Flatten an Array in js  ---------------

// function flatten(value) {
//     let res=[];
//      value.forEach((i)=>{
        
//         if(Array.isArray(i)){
//             console.log('i am array',i)
//             res.push(...flatten(i));
//         }else{
//             console.log('i is not array',i)
//           res.push(i)
//         }
//      })
//      return res;
//   }
  
//   console.log(flatten([1, [2, 3,[4,5,[6,7]]]]))

// another approach with Reduce

// const arr=[1,2,3,4,3];

// function sumArray(val){
//    return val.reduce((acc,currentValue)=>{
//             return acc+currentValue
//     },0)
// }
// console.log('sum of',sumArray(arr))


// function Flatten(value){
//    return value.reduce((acc, currentValue)=>{
//         if(Array.isArray(currentValue)){
//             return acc.concat(...Flatten(currentValue));
//         }else{
//             return  acc.concat(currentValue);
//         }
//     },[]);
// }

// console.log(Flatten([1,[2,3]]));

// --------------- Flatten an Object in Js --------------------

// Declare an object
let ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact:999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG",
        other:{
            age:12,
            kamal:{
                k:'a'
            }
        }
    }
};

function FlattenObject(obj){
    let res={};
    for(let x in obj){
        if(typeof obj[x]==="object" && !Array.isArray(obj[x])){
            const temp=FlattenObject(obj[x]);
            for(let i in temp){
                res[x+'.'+i]=temp[i];
            }

        }else{
          res[x]=obj[x];
        }
    }
    return res;
}
console.log(FlattenObject(ob))

// output 
// {
//   Company: 'GeeksforGeeks',
//   Address: 'Noida',
//   contact: -999999908,
//   'mentor.HTML': 'GFG',
//   'mentor.CSS': 'GFG',
//   'mentor.JavaScript': 'GFG'
// }