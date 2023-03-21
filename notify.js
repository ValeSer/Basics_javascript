const notifyByEmail = (emailAddress) => {
  return `Email sent to: ${emailAddress};`
}

const notifyByText =(phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (contact, transformFunction) => {
  return transformFunction(contact);
}

module.exports = notify;