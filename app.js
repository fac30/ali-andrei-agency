// DARK MODE JS

( () => {
	let theme = 'light';

	/**
	 * Function to toggle between themes
	 *
	 * @param {MouseEvent} event
	 */
	const onToggleTheme = ( { currentTarget } ) => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		theme = newTheme;

		document.documentElement.setAttribute( 'data-theme', newTheme );
		currentTarget.setAttribute( 'aria-pressed', newTheme === 'dark' );
	}; 

	// Get switch button and add click event
	const btn = document.querySelector( `.theme-switch` );
	if ( ! btn ) return;
	btn.addEventListener( 'click', onToggleTheme, false );
  
  
  // DEMO
	const toggle = document.querySelector( `.writing-toggle` );
  if ( ! toggle ) return;
  toggle.addEventListener('click', () => document.body.classList.toggle('vertical'));
} )();

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

// ===================================================================CONTENT RANDOMIZERS=========================================================
  // =================================================================CHANGING H1s==============================================================

// Object containing catchphrases 
const catchphrases = {
    1: 'Train strike?',
    2: 'Tired of being stuck in traffic?',
    3: 'Plane delayed?',
    4: 'Endless bus journeys?',
    5: 'Not much of a walker?',
    6: 'Flat tire?',
    // Add more catchphrases as needed
  };

  // Function to inject a random catchphrase into an element with the specified class
  function injectRandomCatchphrase() {
    // Get the element with the class "h1--changing"
    const h1Element = document.querySelector('.h1--changing');

    // Get an array of all catchphrase keys
    const catchphraseKeys = Object.keys(catchphrases);

    // Choose a random catchphrase key
    const randomKey = catchphraseKeys[Math.floor(Math.random() * catchphraseKeys.length)];

    // Get the catchphrase message based on the random key
    const randomCatchphrase = catchphrases[randomKey];

    // Set the text content of the element to the random catchphrase
    h1Element.textContent = randomCatchphrase;
  }

  // Call the function to inject a random catchphrase when the page loads
  window.addEventListener('load', injectRandomCatchphrase);

  // =================================================================CHANGING H2s==============================================================

// Object containing catchphrases 
const catchphrases2 = {
    1: 'We know..',
    2: 'Us too..',
    3: 'We got you!',
    4: 'Not today!',
    5: 'No worries!',
    6: 'We have the solution',
    // Add more catchphrases as needed
  };

  // Function to inject a random catchphrase into an element with the specified class
  function injectRandomCatchphrase2() {
    // Get the element with the class "h2--changing"
    const h2Element = document.querySelector('.h2--changing');

    // Get an array of all catchphrase keys
    const catchphraseKeys = Object.keys(catchphrases2);

    // Choose a random catchphrase key
    const randomKey = catchphraseKeys[Math.floor(Math.random() * catchphraseKeys.length)];

    // Get the catchphrase message based on the random key
    const randomCatchphrase = catchphrases2[randomKey];

    // Set the text content of the element to the random catchphrase
    h2Element.textContent = randomCatchphrase;
  }

  // Call the function to inject a random catchphrase when the page loads
  window.addEventListener('load', injectRandomCatchphrase2);