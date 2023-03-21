const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
  const message = names.map(name => {
    return `Hi ${name}! 50% off your best candies for you today!`;
  });
  return message
};

console.log(generateMessages(names));