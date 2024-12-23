// The Strategy pattern is a behavioral design pattern that allows us to define a family of algoritms,
// encapsulate each one as a seperate class, and make them interchangeable.


class Context{
    constructor(strategy){
        this.strategy = strategy;
    }
    setStrategy(strategy){
        this.strategy = strategy;
    }
    executeStrategy(data){
        return this.strategy.doAlgorithm(data);
    }
}

class ConcreteStrategyAscending{
    doAlgorithm(data){
        return data.sort((a,b)=>a-b);
    }
}

class ConcreteStrategyDescending{
    doAlgorithm(data){
        return data.sort((a,b)=>b-a);
    }
}

const data=[2,12,4,1,4,22];

const context=new Context(new ConcreteStrategyAscending());

console.log("aa",context.executeStrategy(data))

context.setStrategy(new ConcreteStrategyDescending());

console.log("desc",context.executeStrategy(data));