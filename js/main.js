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
	speed: 1500,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
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

//Smooth scroll / Header link

const headerLinks = document.querySelectorAll('.header__link');
const linkSrcoll = document.querySelectorAll('.js-link-scroll')

window.addEventListener('scroll',function (){
	linkSrcoll.forEach(function (item){
		let currentItem = item
		let itemAttr = currentItem.getAttribute("data-scroll")
		let currentSection = document.querySelector(itemAttr)
		item.classList.remove('active')

		if(window.scrollY >= currentSection.offsetTop - 70){
			headerLinks.forEach(function (item){
				item.classList.remove('active')
			})
			currentItem.classList.add('active')
		} else {
			currentItem.classList.remove('active')
		}
	})

})

headerLinks.forEach(function (item) {
	let currentItem = item
	let itemAttr = currentItem.getAttribute("data-scroll")
	let currentSection = document.querySelector(itemAttr)

	item.addEventListener('click',function (e){
		e.preventDefault()

		headerLinks.forEach(function (item){
			item.classList.remove('active')
			if(item.classList.contains('js-close-menu')) {
				burger.classList.remove('active')
				mobileMenu.classList.remove('active')
			}
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

// burger
const burger = document.querySelector('.header__burger')
const mobileMenu = document.querySelector('.mobile')

burger.addEventListener('click',function (){
	mobileMenu.classList.toggle('active')
	burger.classList.toggle('active')
})

