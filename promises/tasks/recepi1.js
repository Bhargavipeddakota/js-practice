function delay(time, name) {
  const start = Date.now();
  return new Promise(resolve => {
    setTimeout(() => {
      composeMsg(name,start,Date.now())
      resolve(name);
    }, time);
  });
}
const composeMsg = (name,start,end) => {
  const duration = end-start;
  console.log(`${name} => start :${start} end :${end} duration :${duration}`)
}
const tasks = {
  task1: () => delay(1000, "Task 1"),
  task2: () => delay(800, "Task 2"),
  task3: () => delay(600, "Task 3"),
  task4: () => delay(400, "Task 4"),
  task5: () => delay(200, "Task 5")
};

async function runSerial() {
  for (const task in tasks) {
    await tasks[task]();
  }
  console.log("All serial tasks done");
}

runSerial();  


const main1 = async () => {
  return await new Promise(
     (r) => setTimeout(() => {
    console.log("setimeout");
    r(10)
  })
  )
};

const result = await main1();
console.log({result});

new Promsie((resolve) => 
  setTimeout(() => {
    console.log('inside timeout');
    resolve(10)
  }, 1000)
)