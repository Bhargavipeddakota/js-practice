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

-------
const p1 = Deno.readTextFile("file1.txt");
const p2 = Deno.readTextFile("file2.txt");

const p3 = new Promise((resolve) =>  
setTimeout(()=> {
  console.log("time out")
  resolve(10);
},1000))


console.log(p1);
Promise.all([p1,p2,p3]).then(() => {console.log("done");console.log({p1,p2,p3})});

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