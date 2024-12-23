// It ensures that a class has only one instance and provides a global point of access
// to that instance.

// This is usefull when exactly one object is needed to coordition actions across the system.


class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();


console.log(instance1 === instance2);

// Implementation in JS

// -----------> using closures 

// const Singleton=(function(){
//     let instance;
//     function createInstance(){
//         const object=new Object('I am the instance');
//         return object ;
//     }
//     return {
//         getInstance:function(){
//             if(!instance){
//                 instance=createInstance();
//             }
//             return instance; 
//         }
//     }
// })();

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();


// console.log('Testing the Instannce',instance1 === instance2)
