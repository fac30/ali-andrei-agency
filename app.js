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

