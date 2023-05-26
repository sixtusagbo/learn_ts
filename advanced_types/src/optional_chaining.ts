const fetchedUserData = {
  id: 'u1',
  name: 'Sixtus',
  others: { gender: 'Male', active: true },
};

// optional chaining
// compiled to if checks
console.log(fetchedUserData?.others?.gender);
