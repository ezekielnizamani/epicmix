const ul = document.querySelector("ul");
const mixLists = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  `You Don't Own Me`,
  "Fast Car",
  "Run the World (Girls)",
  "Superstition",
];
const total = document.querySelector(".total");
const btn = document.querySelector(".show-list");
let songNum = 1;

const createElement = (text, songNum) => {
  const li = document.createElement("li");
  const textNode = document.createTextNode(text);
  const span = document.createElement("span");
  const spanNode = document.createTextNode(songNum);
  span.appendChild(spanNode);
  span.classList.add("song-number");

  li.appendChild(span);
  li.appendChild(textNode);

  li.classList.add("song");

  ul.appendChild(li);
};

function getElementWithData() {
  mixLists.forEach((list) => {
    // console.log()
    createElement(list, songNum++);
  });
}

function addElement() {
  getElementWithData();
  ul.classList.remove("hide");
  total.innerHTML = mixLists.length + " " + "Great songs";
  btn.classList.add("hide");
}

btn.addEventListener("click", addElement);
