export const stateInfo = [
   {"capital" : "amravathi", "districts" :26},
   {"capital" : "hyderabad", "districts" :33 },
   {"capital" : "bengaluru", "districts" :31 }
]
const sum = (a,b) => a+b;
const product = (a,b) => a*b;
export const call = (a,b) => {
   console.log(sum(a,b));
   console.log(product(a,b));
}
