const printHello = () => {
  console.log('Hello');
}

setTimeout(printHello, 3000);

const executeAfterDelay = (time, aFunction) => {
  setTimeout(aFunction, time*1000);
}

executeAfterDelay(5, printHello);

