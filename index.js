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
const avgStateRate = avgRate(genFreelancer);
console.log(
  "The average rate of all freelancers in the state is:",
  avgStateRate,
  "USD."
);

/////////////// Component Functions ///////////////

function freelancerCard(freelancer) {
  const $card = document.createElement("article"); //create container - use createElement since it does not already exist in the HTML file
  $card.classList.add("freelancer"); //adds a class to the div
  //freelancers information from the object - put into HTML
  $card.innerHTML = `
    <h3>${freelancer.Name}<h3>
    <p>${freelancer.Occupation}</p>
    <p>Rate: $${freelancer.Price} per hour</p>
    `;
  return $card;
}

function freelancerArray(freelancers) {
  const $section = document.createElement("section");
  $section.classList.add("freelancer-list");
  $section.innerHTML = freelancers
    .map((freelancer) => {
      return `
    <article class="freelancer">
    <h3>${freelancer.Name}</h3>
    <p>${freelancer.Occupation}</p>
    <p>Rate: $${freelancer.Price} per hour</p>
    </article>
    `;
    })
    .join(""); //join array of strings into one HTML block without commas
  return $section;
}

function avgRateComp(avgRate) {
  const $avg = document.createElement("div");
  $avg.classList.add("average-rate");
  $avg.innerHTML = `
    <h2>Average Rate</h2>
    <p>The average rate of all freelancers is: <strong>$${avgRate}</strong> per hour.</p>
    `;
  return $avg;
}

function render() {
  //select element where the app goes
  const $app = document.querySelector("#app");

  const average = avgRate(genFreelancer);

  $app.innerHTML = "";
  $app.innerHTML = `
    <h1>Freelancer Directory</h1>
    
    <section class="average-rate">
    <h2>Average Rate </h2>
    <p>The average rate of all freelancers is:
    <strong>$${average}</strong> per hour.</p>
    </section>
    ${freelancerArray(genFreelancer).outerHTML}
    `;
}
render();
