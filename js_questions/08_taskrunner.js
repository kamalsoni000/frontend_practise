// // Task Runner with Concurrency
// const promises = [
//     () => new Promise((resolve) => setTimeout(() => {
//       console.log("Promise 1 resolved");
//       resolve();
//     }, 1000)),
//     () => new Promise((resolve) => setTimeout(() => {
//       console.log("Promise 2 resolved");
//       resolve();
//     }, 2000)),
//     () => new Promise((resolve) => setTimeout(() => {
//       console.log("Promise 3 resolved");
//       resolve();
//     }, 3000)),
//     () => new Promise((resolve) => setTimeout(() => {
//       console.log("Promise 4 resolved");
//       resolve();
//     }, 4000)),
//     () => new Promise((resolve) => setTimeout(() => {
//       console.log("Promise 5 resolved");
//       resolve();
//     }, 5000)),
//     () => new Promise((resolve) => setTimeout(() => {
//       resolve();
//     }, 6000)),
//   ];
  
//   const runner = new TaskRunner(3);
//   promises.forEach((promise) => runner.push(promise));

// Promise 1 resolved  // After 1 seconds
// Promise 2 resolved  // After 2 seconds
// Promise 3 resolved  // After 3 seconds
// Promise 4 resolved  // After 4 seconds
// Promise 5 resolved  // After 5 seconds
// Promise 6 resolved  // After 6 seconds

class TaskRunner{
    constructor(concurrency){
        // Initalize the task queue to hold waiting to be executed.
        this.queue = [];

        // set the maximum number of concurrent tasks allowed
        this.concurrency = concurrency;

        // Keep track of the number of currently active (running) tasks
        this.activeCount=0;
    }

   async push(promise){
        if(this.activeCount < this.concurrency){
           await this.execute(promise);
        }else{
            this.queue.push(promise);
        }
    }

    // Method to execute a task
   async execute(promise){
        this.activeCount++;
        try {
            await promise();
         } finally{
            this.activeCount--;
            if(this.queue.length){
                this.execute(this.queue.shift());
            }
         }
    }

}

const promises = [
    () => new Promise((resolve) => setTimeout(() => {
      console.log("Promise 1 resolved");
      resolve();
    }, 7000)),
    () => new Promise((resolve) => setTimeout(() => {
      console.log("Promise 2 resolved");
      resolve();
    }, 2000)),
    () => new Promise((resolve) => setTimeout(() => {
      console.log("Promise 3 resolved");
      resolve();
    }, 3000)),
    () => new Promise((resolve) => setTimeout(() => {
      console.log("Promise 4 resolved");
      resolve();
    }, 4000)),
    () => new Promise((resolve) => setTimeout(() => {
      console.log("Promise 5 resolved");
      resolve();
    }, 5000)),
    () => new Promise((resolve) => setTimeout(() => {
      resolve();
    }, 6000)),
  ];

const runner =new TaskRunner(3);

promises.forEach((p)=>runner.execute(p));