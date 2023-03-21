let counter = 0;

const increment = () => {
  counter ++;
  console.log(counter);
}

let interval = setInterval(increment, 1000);
setTimeout(() => {
  clearInterval(interval);
}, 5100);