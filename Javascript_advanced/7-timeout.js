console.log("Start of the execution queue");

setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);

for(let iterate=1; iterate<=100; iterate++) {
  console.log(iterate);
}

console.log("End of the loop printing");
