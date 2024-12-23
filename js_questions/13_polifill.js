// const arr=[12,3,4,5];

// const newMap=arr.map((x)=>{
//     return x+1;
// })
// console.log('newMap',newMap);


// Array.prototype.mapkml=function(callback){
//     let resultArray=[];
//     if(typeof callback!=='function'){
//         return "not an Callback"
//     }
//     for(let i=0;i<this.length;i++){
//         resultArray.push(callback(this[i],i,this));
//     }
//     console.log('resultArray',resultArray);
//     return resultArray;
// }

// const newArr= arr.mapkml((x,i)=>{
//     console.log('i',i);
//     return x+i;
// });

// console.log('newArr',newArr);




// Promise.allSettled()

// const promise1=Promise.resolve(3);
// const promise2=Promise.reject('err');
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,100,'foo');
// });


// Promise.allSettled([promise1,promise2,promise3]).then((val)=>{
//     console.log('val',val);
// }).catch((err)=>{
//     console.log(err);
// })

// Promise.all()
const promise1=Promise.resolve(3);
const promise2=42;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo');
});

// Promise.all([promise1,promise2,promise3]).then((val)=>{
//     console.log('val',val);
// }).catch((err)=>{
//     console.log(err);
// })
// Promise.myAll=function(values){
//     const promise = new Promise(function (resolve, reject) { 
//         let result = []; 
//         let total = 0; 
//         values.forEach((item, index) => { 
//             Promise.resolve(item).then((res) => { 
//                 result[index] = res; 
//                 total++; 
//                 if (total === values.length) 
//                     resolve(result); 
//             }). 
//                 catch((err) => { 
//                     reject(err); 
//                 }) 
//         }) 
//     }) 
//     return promise          


// }
Promise.myAll=function(values){
    const promise=new Promise(function(resolve,reject){
        let result=[];
        let total=0;
        values.forEach((item,index)=>{
            Promise.resolve(item).then((res)=>{
                result[index]=res;
                total++;
                if(total===values.length)
                   resolve(result);
                
            }).catch((err)=>{
                reject(err);
            })
        })
    })
    return promise;
}

Promise.myAll([promise1,promise2,promise3]).then((val)=>{
    console.log('val',val);
}).catch((err)=>{
    console.log(err);
})