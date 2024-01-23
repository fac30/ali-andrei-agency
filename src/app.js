// DARK MODE JS

const toggleDarkMode = () => {
  const bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode");

  const isDarkMode = bodyElement.classList.contains("dark-mode");
  document
    .querySelector(".theme-switch")
    .setAttribute("aria-pressed", isDarkMode);
};

// Adding click event listener
const themeSwitchButton = document.querySelector(".theme-switch");

if (themeSwitchButton) {
  themeSwitchButton.addEventListener("click", toggleDarkMode);
}

//   NAVBAR JS

const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
const menu = document.querySelector(".main-nav-list");
function toggleMenu() {
  menu.classList.toggle("show-menu");
  openMenu.style.display = menu.classList.contains("show-menu")
    ? "none"
    : "block";
  closeMenu.style.display = menu.classList.contains("show-menu")
    ? "block"
    : "none";
}
openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
// nav menu color function
const links = document.querySelectorAll(".main-nav-link");
function handleLinkClick(e) {
  links.forEach((link) => {
    link.classList.remove("active-link");
  });

  e.target.classList.add("active-link");
}

links.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});
// Form Handler
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const messageDiv = document.querySelector(".welcome-message");
    messageDiv.innerHTML = `💥 Welcome, ${name}! Thank you for submitting. We will contact you soon! 💥`;
    messageDiv.style.display = "block";
    document.querySelector(".message").style.display = "block";
    // Hide the form
    document.getElementById("formContainer").style.display = "none";
  });
/*=================================*/

// Object containing catchphrases
const catchphrases = {
  1: "Train strike?",
  2: "Stuck in traffic?",
  3: "Plane delayed?",
  4: "Long bus journeys?",
  5: "Not a huge walker?",
  6: "Flat tire?",
  // Add more catchphrases as needed
};
const catchphrases2 = {
  1: "We know..",
  2: "Us too..",
  3: "We get you!",
  4: "Not today!",
  5: "No worries!",
  6: "We have the solution",
  // Add more catchphrases as needed
};
const h1Element = document.querySelector(".h1--changing");
const h2Element = document.querySelector(".h2--changing");

const randomKey = (phrase) =>
  Math.floor(Math.random() * Object.keys(phrase).length) + 1;
const changeCatchphrase = () => {
  h1Element.textContent = catchphrases[randomKey(catchphrases)];
  h2Element.textContent = catchphrases2[randomKey(catchphrases2)];
};

// changeCatchphrase();

setInterval(changeCatchphrase, 3000);
const upBtn = document.querySelector(".fa-arrow-up");
upBtn.addEventListener("click", () =>{
  window.scrollTo({top: 0});
})
