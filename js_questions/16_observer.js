// The Observer pattern where an Object , known as the suject, maintains a list of its dependents , 
// called observers , and notifies them of any state changes.

// This pattern is useful for implementing distributing event-handling systems , such as updating the user
// interface in response to data changes or implementing event-driven architecture.

// class Subject{
//     constructor(){
//         this.observers = [];
//     }
//     addObserver(observer){
//         this.observers.push(observer);
//     }
//     removeObserver(observer){
//         this.observers=this.observers.filter((ob)=>ob!==observer);
//     }
//     notifyObservers(){
//         this.observers.forEach((ob)=>ob.update());
//     }
// }

// class Observer{
//     update(){
//         console.log("Observer updated");
//     }
// }

// // usage
// const subject=new Subject();
// const observer1=new Observer();
// const observer2=new Observer();

// subject.addObserver(observer1);
// subject.addObserver(observer2);

// subject.notifyObservers();

// Example of this in Notification System 

class Subject{
    constructor(){
        this.observers=[];
    }
    subcribe(observer){
        this.observers.push(observer);
    }
    unsubscribe(observer){
        this.observers=this.observers.filter(ob!==observer);
    }
    notify(data){
        this.observers.forEach(ob=>ob.update(data));
    }
}

class Observer{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(`${this.name} recived data: ${data}`);
    }
}

const subject=new Subject();

const observer1=new Observer("one");
const observer2=new Observer("two");

subject.subcribe(observer1);
subject.subcribe(observer2);

subject.notify("updare")