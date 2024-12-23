// Factory Pattern is a design pattern used to 

// function createAnimal(type){
//     if(type==="dog"){
//         return {
//             sound:"woof"
//         };
//     }else if(type==="cat"){
//         return {
//             sound:"meow"
//         }
//     }
// }

// const dog=createAnimal("dog");
// const cat=createAnimal("cat");

// implementing this with class

class Dog{
    constructor(){
        this.sound="bhao..."
    }
}
class Cat{
    constructor(){
        this.sound="meow..."
    }
}

class AnimalFactory{
    createAnimal(type){
        if(type==="dog"){
            return new Dog()
        }else if(type==="cat"){
            return new Cat();
        }
    }
}

const factory=new AnimalFactory();

const dog=factory.createAnimal("dog");
const cat=factory.createAnimal("cat");

console.log('Dog sound',dog.sound)
console.log('Cat sound',cat.sound)


// --------- BENIFITS --------------------------------
// Encapsualtion : The Creation logic is encapsulated in one place
// Flexibility : Easy to add new types of Object Without changing the client code .
// Decoupling : Reduces the dependency of the client code on specific classess.