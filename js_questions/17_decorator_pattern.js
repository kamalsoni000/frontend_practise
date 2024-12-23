// Decorator pattern is a structural design pattern that allows behavior to be added to individual objects,
// dynamically , without affecting the behavior of another objec from the same class


// -------- by using Classes --------

// class Car{
//     drive(){
//         return "Driving";
//     }
// }

// class CarDecorator {
//     constructor(car){
//         this.car = car;
//     }
//     drive(){
//         return this.car.drive();
//     }
// }

// class GPSDecorator extends CarDecorator{
//     drive(){
//         return `${super.drive()} with GPS`;
//     }
// }
// const myCar=new Car();
// const myCarGps=new GPSDecorator(myCar);

// console.log(myCarGps.drive())


// --------- by using Function ---------

function car(){
    return {
        drive:()=>"Driving",
    };
}

function GPSDecorator(car){
    return {
        drive:()=>`${car.drive()} with GPS`
    }
}

let mycar=car();
const gpsCar=GPSDecorator(mycar);

console.log('GPS Car',gpsCar.drive())