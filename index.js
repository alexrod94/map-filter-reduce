const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const newCities = cities.map((word) => {
  let firstLetter = word.slice(0, 1);
  let upperLetter = firstLetter.toUpperCase();
  const newString = upperLetter + word.slice(1, word.length);
  return newString;
});

const longCities = cities.filter((city) => {
  return city.length > 6;
});

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const legalAge = people.filter((person) => {
  return person.age >= 21;
});

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 5);

const newPeople = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

const totalAge = newPeople.reduce((x, y) => {
  return x + y.age;
}, 0);

console.log(totalAge);
