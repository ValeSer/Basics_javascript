const fizzbuzz = require('./fizzbuzz');

const fizzbuzzUntil = (num) => {
  for (let i = 0 ; i <= num; i++) {
     console.log(fizzbuzz(i));
  };
}





module.exports = fizzbuzzUntil;