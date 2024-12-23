// // Private Properties in JS 

// class ClassWithPrivate{
//     #privateField;
//     static getPrivateField(obj){
//         return obj.#privateField;
//     }
// }

// console.log()

class Person{
    // Private Property
    #age;

    constructor(name, age){
        this.name = name;
        this.#age=age;
    }
    getAge(){
        return this.#age;
    }

}
const person=new Person("kamal",21);
console.log(person.name);
console.log(person.getAge());