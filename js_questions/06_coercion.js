// Type Coercion

// const value1=Number('1');
// const value2=2;
// console.log(value2+value1);

// Boolean Values Coercion

// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(-0));
// // console.log(Boolean(Nan));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(false));

// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(Symbol()));
// console.log(!![]);
// console.log(!!Symbol());

// Questions

// console.log(![]);
// console.log([]==![]);
// console.log([]===![]);

// console.log(null==undefined);
// console.log(true==true);

// console.log(typeof null);
// console.log(typeof NaN);
// console.log({} instanceof Object);
// console.log(typeof NaN);

// console.log(typeof new String("") === typeof String('')); // 
// console.log(Boolean('false'))      // true
// console.log(Boolean(false))        // false
// console.log('3' + 1)               // 31
// console.log('3' - 1)               // 2
// console.log('3' - ' 02 ')          //  1
// console.log('3' * ' 02 ')          //  6
// console.log(25 + -"2" - false +10 );  // 23010
// console.log(Number('1'))           // 1
// console.log(Number('number'))      // Nan
// console.log(Number(null))          // Nan
// console.log(Number(false))         //  0

// console.log(JSON.stringify([1,2,null,3])); // [1,2,null,3]
// console.log(JSON.stringify([1,2,undefined,3])); // [1,2,null,3]
// console.log(null===undefined); // fasle
// console.log(null==undefined); // true
// console.log(null ==0) // false

// console.log(null < 0)     // fasle
// console.log(null > 0)  // false
// console.log(null <= 0)    // true
// console.log(null >= 0)  // true
// console.log(undefined == 0) // fasle

// console.log(-"giddyup" + 409);

// const myContainer = {
//     height: 4,
//     width: 2,
//   }
//   const num = 12;
//   console.log(num + myContainer)

// const myContainer = {
//     height: 4,
//     width: 2,
   
//     valueOf: function() {
//         return this.height * this.width;
//       },
//       toString: function() {
//         return this.height + this.width;
//       },
//   };
  
//   const num = 12;
//   console.log(num + myContainer);

// console.log("number" + 15 + 3);
// console.log( 15 + 3+"number");

// console.log([1]<null);

// console.log('true'==true)

// console.log(''==null)

// console.log(['x']=='x');

// console.log([]+null+1);
// console.log(''+null+1);

// console.log( typeof(''+null));
// console.log(null+1);


// console.log([]=="")

