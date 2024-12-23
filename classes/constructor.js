// Constructor in Classes In JS

// class ParentClass{
//     constructor(){
//         return 1;
//     }
// }

// console.log('new', new ParentClass());

// class ChildClass extends ParentClass{
//     constructor(){
//         return {};
//     }
// }
// console.log('ChildClass', new ChildClass());

//Examples Using The Constructor in JS

// class Sum{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
// }

// class Math extends Sum{
//     constructor(x,y,z){
//         super(x,y);
//         this.z=z;
//     }
//     get Add(){
//         return this.x + this.y + this.z;
//     }
//     set Add(val){
//         this.x=val+this.x;
//         this.y=val+this.y;
//     }
// }

// const reff=new Math(1,2,3);
// console.log('Resuult ....',reff.Add);
// reff.Add=1;
// console.log('Resuult change ....',reff.x,reff.y,reff.z);

// Calling super in a constructor bound to a different prototype

class Bike {
    constructor(){
        this.name="Splendor";
    }
}

class Car{
    constructor(){
        this.name="Audi";
    }
}

class RentalService extends Bike{
    constructor(){
        super();
    }
}

Object.setPrototypeOf(RentalService, Car);

const newInstance = new RentalService();

// newInstance ----> RentalService.prototype ----> Car.prototype
console.log(newInstance instanceof Bike);

console.log(newInstance instanceof Car);

console.log('name is :',newInstance.name);