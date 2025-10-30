/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freeGen() {
  //these will generate the random index in each array
  const genName = Math.floor(Math.random() * NAMES.length);
  const genOccup = Math.floor(Math.random() * OCCUPATIONS.length);
  const genPrice = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );

  const freelancer = {
    //object that contains array[random Index]
    Name: NAMES[genName],
    Occupation: OCCUPATIONS[genOccup],
    Price: genPrice,
  };
  return freelancer;
}

// const genFreelancer = [freeGen()];
// console.log(genFreelancer);

console.log(freeGen());

const genFreelancer = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  const newLancer = freeGen();
  genFreelancer.push(newLancer);
}
console.log(genFreelancer);

function avgRate(genFreelancer) {
  //loop through the array of freelancers
  let sum = 0;
  for (let i = 0; i < genFreelancer.length; i++) {
    //add up all of their .Price values
    sum += genFreelancer[i].Price; //store all of the .Price values in a variable
  }
  //divide the total by the number of freelancers (NUM_FREELANCERS)
  const avg = sum / genFreelancer.length;
  return avg;
}
console.log(
  "The average rate of all freelancers in the state is:",
  avgRate(genFreelancer),
  "USD."
);
