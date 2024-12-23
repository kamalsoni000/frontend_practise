// let arr=[
//     {
//         key:"grup 1",
//         data:"ajju"
//     },
//     {
//         key:"grup 1",
//         data:"ajju"
//     },
//     {
//         key:"grup 1",
//         data:"ajju"
//     },
//     {
//         key:"grup 2",
//         data:"ajju asa"
//     },
//     {
//         key:"grup 2",
//         data:"ajju ws"
//     },
// ];

// let output ={} ;




// output 
// let output ={
//     "grup 1":[
//         {
//             key:"grup 1",
//             data:"ajju"
//         },
//         {
//             key:"grup 1",
//             data:"ajju"
//         },
//         {
//             key:"grup 1",
//             data:"ajju"
//         },
//     ],
//      "grup 2":[
//         {
//             key:"grup 2",
//             data:"ajju asa"
//         },
//         {
//             key:"grup 2",
//             data:"ajju ws"
//         },
//      ]
// }

// const obj = {
//     a: 1,
//     b: {
//       c: 2,
//       getD() {
//         return this.c;
//       }
//     },
//     getC() {
//         return this.a;
//       }
//   };
  
//   console.log(obj.b.getD());  
//   console.log(obj.getC());  
//   const getD = obj.b.getD;
//   console.log(getD());


// function example(x = 5, y = x + 1) {
//     return [x, y];
//   }
  
//   console.log(example()); // 5,6
//   console.log(example(3)); // 3,4
//   console.log(example(undefined, 10));  // 5,10

// const arr = [1, 2, 3, 4, 5];
// const result = arr.map(x => x * 2).filter(x => x > 5);
// console.log('result',result);

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => resolve('First Promise Resolved'), 1000);
//   });
  
//   const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve('Second Promise Resolved'), 500);
//   });
  
//   Promise.all([promise1, promise2]).then((results) => {
//     console.log(results);
//   });


// function createCounter() {
//     let count = 0;
//     return {
//       increment: function() {
//         count += 1;
//         return count;
//       },
//       decrement: function() {
//         count -= 1;
//         return count;
//       },
//       getCount: function() {
//         return count;
//       }
//     };
//   }
  
//   const counter = createCounter();
//   console.log(counter.increment()); // 1
//   console.log(counter.increment()); // 2
//   console.log(counter.decrement()); // 1
//   console.log(counter.getCount()); // 1

// const fetchUserData = (userId) => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve({ userId, name: 'John Doe' }), 1000);
//     });
//   };
  
//   const fetchPosts = (userId) => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve([{ userId, postId: 1, title: 'Post 1' }]), 1000);
//     });
//   };
  
//   fetchUserData(1)
//     .then(user => {
//       console.log('User:', user);
//       return fetchPosts(user.userId);
//     })
//     .then(posts => {
//       console.log('Posts:', posts);
//     });


// function Animal(name) {
//     this.name = name;
//   }
  
//   Animal.prototype.speak = function() {
//     return `${this.name} makes a noise.`;
//   };
  
//   function Dog(name) {
//     Animal.call(this, name); // Call the parent constructor
//   }
  
//   // Inherit from Animal
//   Dog.prototype = Object.create(Animal.prototype);
//   Dog.prototype.constructor = Dog;
  
//   Dog.prototype.speak = function() {
//     return `${this.name} barks.`;
//   };
  
//   const dog = new Dog('Rex');
//   console.log(dog.speak()); // Rex barks
//   console.log(dog instanceof Dog); // true
//   console.log(dog instanceof Animal);  


const fetchData = (shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve('Data fetched successfully!');
        } else {
          reject(new Error('Failed to fetch data.'));
        }
      }, 1000);
    });
  };
  
  const fetchUserData = async () => {
    try {
      const data = await fetchData(true);
      console.log(data); // Data fetched successfully!
    } catch (error) {
      console.log(error.message);
    }
  
    try {
      const data = await fetchData(false);
      console.log(data);
    } catch (error) {
      console.log(error.message); // Failed to fetch data.
    }
  };
  
  fetchUserData();