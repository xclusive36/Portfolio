// Description: This file contains the scripts for the application

// Get the cards element
const cardsEl = document.getElementById("cards");

const projects = [
  {
    title: "Volunteer Finder",
    alt: "Volunteer Finder",
    image: "./assets/images/vf.png",
    link: "https://github.com/erin-m-keller/volunteer-finder",
  },
  {
    title: "Misfitgirl.com",
    alt: "MisfitGirl.com Wax melts",
    image: "./assets/images/misfitgirl.png",
    link: "https://misfitgirl.com",
  },
  {
    title: "LiteStep iOS App",
    alt: "LiteStep Picklist App",
    image: "./assets/images/litestep.webp",
    link: "https://apps.apple.com/us/app/litestep/id1490896776",
  },
  {
    title: "Minesweeper Web App",
    alt: "React Minesweeper Game",
    image: "./assets/images/minesweeper.png",
    link: "https://stirring-parfait-06fd3c.netlify.app/",
  },
  {
    title: "PasswordGoblin App",
    alt: "Password Goblin App and generator",
    image: "./assets/images/passwordGoblin.png",
    link: "https://github.com/xclusive36/passwordGoblin",
  },
];

// Create a function to create the cards
function createCards() {
  projects.map((project, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const link = document.createElement("a");
    link.setAttribute("href", project.link);
    link.setAttribute("target", "_blank");

    const image = document.createElement("img");
    image.setAttribute("src", project.image);
    image.setAttribute("alt", project.alt);
    image.classList.add("card-images");
    if (index === 0) image.classList.add("large-image");

    link.appendChild(image);
    card.appendChild(title);
    card.appendChild(link);
    cardsEl.appendChild(card);
  });
}

createCards();
