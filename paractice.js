let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
// let arr = [{
//     name : "aimal",
//     age : 19
// },
// {
//  name : "zohaib",
//  age : 20
// }];

// let sum = arr.reduce((acc , current) => acc + current.age , 0);

// console.log(sum)

// function sumTo(n){
//     if( n == 1){
//         return n;
//     } else {
//         return n + sumTo(n-1);
//     }
// }
// const a = (initValue,n) => {
//     let aOfn = 1 + (n-1)*1;
//     return  n*(initValue + aOfn)/2; 
// } 
// console.log(a(1,10));
// function sumTo(initValue,n){
// for(let i=0;i<=n;i++){
//     initValue = initValue + i;
// }
// return initValue;
// }

