console.log("before 1 promise");

const p1 = Deno.readTextFile('./file1.txt')

console.log(p1)

p1.then((data => {
  console.log(data);
})).then(() => console.log('inside second then (p1)'))

const p2 = new Promise ((resolve)=> {
   setTimeout(() => console.log(`inside set time out (promis 2)`),0)
   resolve(10);
})
p2.then(() => console.log(`inside 1st then p2`))
console.log(`after promis`)