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

headerLinks.forEach(function (item) {
	const currentItem = item
	const itemAttr = currentItem.getAttribute("data-scroll")
	const currentSection = document.querySelector(itemAttr)

	window.addEventListener('scroll',function (){
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

	item.addEventListener('click',function (e){
		e.preventDefault()

		headerLinks.forEach(function (item){
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

// Footer link
const footerLinks = document.querySelectorAll('.footer__link');

footerLinks.forEach(function (item) {

	item.addEventListener('click',function (e){
		e.preventDefault()
		const currentItemFt = item
		const itemAttrFt = currentItemFt.getAttribute("data-scroll")
		const currentSectionFt = document.querySelector(itemAttrFt)

		scrollTo(currentSectionFt)
	})
})


// burger
const burger = document.querySelector('.header__burger')
const mobileMenu = document.querySelector('.mobile')

burger.addEventListener('click',function (){
	mobileMenu.classList.toggle('active')
	burger.classList.toggle('active')
})

//Mobile link Active

const mobileLinks = document.querySelectorAll('.mobile__link');

mobileLinks.forEach(function (item) {

	item.addEventListener('click',function (e){
		e.preventDefault()
		const currentItemMb = item
		const itemAttrMb = currentItemMb.getAttribute("data-scroll")
		const currentSectionMb = document.querySelector(itemAttrMb)

		if(item.classList.contains('close-menu-js')) {
			burger.classList.remove('active')
			mobileMenu.classList.remove('active')
		}

		mobileLinks.forEach(function (item){
			item.classList.remove('active')
		})

		currentItemMb.classList.add('active')
		scrollTo(currentSectionMb)
	})
})
