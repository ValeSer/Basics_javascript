const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (friends) => {
  const message = namesAndDiscounts.map(friend => {
    return `Hi ${friend.name}! ${friend.discount} off your best candies for you today!`;
  });
  return message
};


console.log(generateMessages(namesAndDiscounts));