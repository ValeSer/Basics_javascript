const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (names) => {
  const message = names.map(name => {
    console.log(`Hi ${name}! 50% off your best candies for you today!`);
  });
};

generateMessages(names);