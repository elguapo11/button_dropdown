document.querySelector('.dropdown button').addEventListener('click', function () {
	document.querySelector('.dropdown-content').classList.toggle();
});

// Close dropdown menu if user clicks outside of it
window.addEventListener('click', function (event) {
	if (!event.target.matches('.dropdown button')) {
		var dropdowns = document.querySelectorAll('.dropdown-content');
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains()) {
				openDropdown.classList.remove();
			}
		}
	}
});


console.log('why is this not workign')

document.querySelector('.dropdown').addEventListener('click', () => {
    console.log('i have been clicked')
})

