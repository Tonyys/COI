//HEADER Scroll
const intro = document.querySelector('.intro')
const header = document.querySelector('.header')

	window.addEventListener('scroll',function (){
		if(window.scrollY >= intro.scrollHeight - 80){
			header.classList.add('active')
			} else {
			header.classList.remove('active')
		}
	})


//select-Dropdown

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

//Smooth scroll

const btnScroll = document.querySelectorAll('.header__link');

btnScroll.forEach(function (item) {
	let currentItem = item
	let itemAttr = currentItem.getAttribute("data-scroll")
	let currentSection = document.querySelector(itemAttr)

	window.addEventListener('scroll',function (){
		currentItem.classList.remove('active')

		if(window.scrollY >= currentSection.offsetTop - 70){
			btnScroll.forEach(function (item){
				item.classList.remove('active')
			})
			currentItem.classList.add('active')
		} else {
			currentItem.classList.remove('active')
		}
	})

	item.addEventListener('click',function (e){
		e.preventDefault()


		btnScroll.forEach(function (item){
			item.classList.remove('active')
		})

		currentItem.classList.add('active')
		scrollTo(currentSection)
	})
})

function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop - 50,
		behavior: 'smooth'
	})
}
