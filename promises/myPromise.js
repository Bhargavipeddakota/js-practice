// class myPromise {
//   constructor(fn) {
//     this.resolve = function (val) {
//       this.value = val;
//     };
//     this.reject = function (val) {
//       this.value = val;
//     };
//     fn(this.resolve, this.reject);
//   }
//   then(cb) {
//     return new myPromise((resolve, reject) => resolve(cb(this.value)));
//   }
// }

// const p = new myPromise((resolve, reject) => {
//   resolve(10);
// });

// console.log(p);