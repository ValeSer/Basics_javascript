const validLength = 11;
const isValidLength = (phoneNumber) => {
  
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return false;
  }
}


module.exports = isValidLength;