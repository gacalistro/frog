// VARIABLES
let indexFacts;

// FETCH JSON
async function getFrogs() {
  return await fetch("./frogs.json").then((data) => data.json());
}

// GET AND SHOW RANDOM PICURES
async function showFrogs() {
  const { pics, facts } = await getFrogs();

  const showFact = Math.floor(Math.random() * 5);
  const indexPics = Math.floor(Math.random() * pics.length);
  indexFacts = Math.floor(Math.random() * facts.length);

  showFact === 0
    ? factButton.classList.add("show")
    : factButton.classList.remove("show");

  picture.innerHTML = `<img src="${pics[indexPics]}" alt="sapo"/>`;
}

// SHOW MODAL OF FACTS
async function showFacts() {
  const { facts } = await getFrogs();

  funFact.classList.add("show");
  console.log(indexFacts);
  factQuote.innerHTML = `<p>${facts[indexFacts]}</p>`;
}

// HIDE MODAL OF FACTS
function hideFacts() {
  funFact.classList.remove("show");
}

// START LOADING A PICTURE
showFrogs();
