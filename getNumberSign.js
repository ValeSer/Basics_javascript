const getNumberSign = (num) => {
  if (num === 0) {
    return 0;
  } else if (num > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
}

module.exports = getNumberSign;