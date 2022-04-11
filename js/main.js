const dropdowns = document.querySelectorAll('.dropdown-js');
if(dropdowns) {
	// dropdown func
	dropdowns.forEach((dropdown) => {

		const currentDropdownField = dropdown.querySelector('.dropdown-js__current');
		const dropdownListField = dropdown.querySelectorAll('.dropdown-js__list a');

		currentDropdownField.addEventListener('click', (event) => {

			dropdown.classList.toggle('open');
		});

		dropdownListField.forEach((item) => {
			item.addEventListener('click', (event) => {
				event.preventDefault();

				const target = event.currentTarget;
				const clickedValue = target.getAttribute('data-value');
				const currentDropdown = target.closest('.dropdown-js').querySelector('.dropdown-js__current')

				currentDropdown.setAttribute('data-value', clickedValue);
				currentDropdown.querySelector('span').innerHTML = clickedValue;

				dropdown.classList.remove('open');

			})
		})

	});

}

const swiperItr = new Swiper('.intro__swiper', {
	loop: true,
	autoplay: {
		delay: 4000,
	},
	spaceBetween: 100,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.intro__next',
		prevEl: '.intro__prev',
	},
});

const swiperBg = new Swiper('.intro__bg', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
});

swiperItr.controller.control = swiperBg
