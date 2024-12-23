// common pitfalls of using the `this` keyword

// losing context in callbacks

// const obj={
//     value:42,
//     getValue:function(){
//         return this.value;
//     }
// }

// const getValue=obj.getValue;
// console.log('getvalue',getValue());

// using this in nested functions

// const obj={
//     value:42,
//     getValue:function(){
//         function innerFunction(){
//             return this.value;
//         }
//         return innerFunction();
//     }
// }
// console.log(obj.getValue());

// Misunderstanding `this` in arrow functions

// const obj={
//     value:42,
//     getValue:()=>{
//         return this.value;
//     }
// }
// console.log(obj.getValue());


// Solution by using `.bind()`

// const obj={
//     value:42,
//     getValue:function(){
//         return this.value;
//     }
// }

// const getValue=obj.getValue.bind(obj);
// console.log(getValue());

// using arrow functions

// const obj={
//     value:41,
//     getValue:function(){
//         const innerFunction=()=>{
//             return this.value;
//         }
//         return innerFunction();
//     }
// }
// // const getValue=obj.getValue;
// console.log(obj.getValue());

// String context in Variable

const obj={
    value:41,
    getValue:function(){
        const self=this;
        function innerFunction(){
            return self.value;
        }
        return innerFunction();
    }
}

console.log(obj.getValue());