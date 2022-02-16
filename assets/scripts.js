nav = document.querySelector('header nav');

nav.addEventListener('click', () => {
	if (nav.classList.contains('open')) {
		nav.classList.remove('open');
	} else {
		nav.classList.add('open');
	}
});
