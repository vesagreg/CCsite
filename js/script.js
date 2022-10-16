document.addEventListener('DOMContentLoaded', function () {
	const navigation = document.querySelector('.navbar')
	const navLinks = document.querySelectorAll('.nav-link')
	const menuShadow = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 5) {
			navigation.classList.add('shadow-bg')
		} else {
			navigation.classList.remove('shadow-bg')
		}
	}

    function removeFromScreen() {
        if(menuShadow.classList.contains('show')){
            menuShadow.classList.remove('show')
        }
    }

	window.addEventListener('scroll', addShadow)
	navLinks.forEach(link => link.addEventListener('click', () => menuShadow.classList.remove('show')))
    addEventListener('click',removeFromScreen )
})
