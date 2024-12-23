// Shallow Copy in JS

// const original={
//     a:1,
//     b:{
//         c:3
//     }
// };
// // const shallowCopy={...original};

// const shallowCopy=Object.assign({},original);
// shallowCopy.b.c=333


// console.log('shallowCopy',shallowCopy);
// console.log('original',original);

// deepCopy in JS

const original={
    a:1,
    b:{
        c:3
    }
};

// let deepCopy=JSON.parse(JSON.stringify(original));
let deepCopy=structuredClone(original);
deepCopy.b.c=22
console.log('original',original);
console.log('deepCopy',deepCopy);