console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
-------------------------------------------------------------------------------------------------------
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => {
  console.log(3);
  setTimeout(() => console.log(4));
});

console.log(5);
-------------------------------------------------------------------------------------------------------
setTimeout(() => console.log("A"));

Promise.resolve().then(() => console.log("B"));

Promise.resolve().then(() => {
  console.log("C");
  Promise.resolve().then(() => console.log("D"));
});

console.log("E");
-------------------------------------------------------------------------------------------------------
console.log("start");

new Promise(() => {
  console.log("inside");
});

console.log("end");
-------------------------------------------------------------------------------------------------------
.then() can be attached:

before resolve() (most common)

after resolve() (already-fulfilled promise)

Example (attach BEFORE resolve)
------------------
const p = new Promise(resolve => {
  setTimeout(() => resolve(10), 1000);
});

p.then(v => console.log(v));

Example (attach AFTER resolve)
------------------
const p = Promise.resolve(10);

setTimeout(() => {
  p.then(v => console.log(v));
}, 1000);
-------------------------------------------------------------------------------------------------------

const p = new Promise(resolve => {
  setTimeout(() => {
    console.log("in set");
    resolve(10);
  }, 1000);
});

p.then(v => console.log(v));
Promise created (pending)
↓
.then registered (no execution)
↓
setTimeout fires
↓
resolve(10)
↓
promise fulfilled
↓
.then callback queued (microtask)
↓
.then callback runs
↓
10 printed
-------------------------------------------------------------------------------------------------------
promise states

Case 1 — Fulfilled
------------------
const p = new Promise(resolve => {
  resolve(42);
  resolve(100); // ignored
});

p.then(v => console.log(v)); // 42


Case 2 — Rejected
------------------
const p = new Promise((resolve, reject) => {
  reject("error");
  resolve("ok"); // ignored
});

p.then(v => console.log(v)).catch(e => console.log(e)); // "error"


Case 3 — Pending for a while

const p = new Promise(resolve => {
  setTimeout(() => resolve(10), 1000);
});

p.then(v => console.log(v)); // waits 1s

AFTER RESOLVED(pending)
------------------

let externalResolve;

const p = new Promise((resolve, reject) => {
  externalResolve = resolve; // save it
});

console.log(p); // Promise { <pending> }

// Later, resolve it
externalResolve(20);

p.then(v => console.log(v)); // 20
-------------------------------------------------------------------------------------------------------
const p = new Promise((resolve, reject) => {
  resolve(1);
  reject(2);
});

p.then(v => console.log("fulfilled:", v))
 .catch(e => console.log("rejected:", e));
You, 2 min
console.log("before promise");

const p1 = Deno.readTextFile('./file1.txt')

console.log(p1)

p1.then((data => {
  console.log(data);
})).then(() => console.log('inside second then (p1)'))

const p2 = new Promise ((resolve)=> {
   setTimeout(() => console.log(`inside set time out (promis 2)`),3000)
   resolve(10);
})
p2.then(() => console.log(`inside 1st then p2`))
console.log(`after promis`)

------>
console.log("before promise");
const p1 = Deno.readTextFile("./file1.txt")
p1.then((data) =>{
  new Promise((resolve, reject) => {
    console.log("inside inner promis");
   resolve(2)
  }).then(()=> console.log("inside inner then"));
  console.log("insie outer promis")
  console.log(data)
})

console.log(`after promis`)

---------->

console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
  Promise.resolve().then(() => console.log("Promise 2"));
});

console.log("End");

----------->
console.log("start");

setTimeout(() => {
  console.log("timeout1");
  Promise.resolve().then(() => console.log("promise inside timeout"));
}, 0);

Promise.resolve().then(() => {
  console.log("promise1");
  setTimeout(() => console.log("timeout2"), 0);
}).then(() => console.log("promise2"));

console.log("end");

----->
console.log("start");

setTimeout(() => {
  console.log("timeout1");
  Promise.resolve().then(() => console.log("promise inside timeout"));
}, 3000);

Promise.resolve().then(() => {
  console.log("promise1");
  setTimeout(() => console.log("timeout2"), 1000);
}).then(() => console.log("promise2"));

console.log("end");

---
console.log("Start");

const p1 = Deno.readTextFile("file1.txt").then(() => console.log("A"));
const p2 = Deno.readTextFile("file1.txt").then(() => console.log("B"));
Promise.resolve().then(() => console.log("Micro"));

console.log("End");
