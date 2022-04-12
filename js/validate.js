const bodyElem = document.querySelector('body')

//Name
let formInp = document.getElementById('form-name')
let errName = document.querySelector('.name-js')
//Number
let inpNumber = document.getElementById('form-number')
let errNumber = document.querySelector('.number-js')
//Email
let inpEmail = document.getElementById('form-email')
let errEmail = document.querySelector('.email-js')
//Select
let errSelect = document.querySelector('.select-js')

let popOpen = document.querySelector('.pop-up')

var regNumber = /^[\d ()+-]+$/

var regEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let count = 0

document.querySelector('.form__btn').addEventListener('click' , function(e){
	let select = document.querySelector('.dropdown-js__current')
	let selectAttr = select.getAttribute('data-value')
	e.preventDefault()

	if (formInp.value.length < 3) {
		notValid(errName)
		count--
	} else {
		valid(errName)
		count++
	}
	if (!isPhone(regNumber,inpNumber)&& inpNumber.value.length <= 17) {
		notValid(errNumber)
		count--
	} else {
		valid(errNumber)
		count++
	}
	if(!isEmail (regEmail, inpEmail.value) || inpEmail.value.length <= 3) {
		notValid(errEmail)
		count--
	} else {
		valid(errEmail)
		count++
	}

	if(selectAttr === 'unset'){
		notValid(errSelect)
		count--
	} else {
		valid(errSelect)
		count++
	}

	if(count < 4) {
		count = 0
	}

	if(count === 4) {
		popOpen.classList.add('active')
		bodyElem.classList.add('active')
		count = 0
	}
})

function isPhone (regex, inp) {
	return regex.test(inp)
}
function isEmail (regex, inp) {
	return regex.test(inp)
}

function notValid (inp) {
	inp.classList.remove('is-valid')
	inp.classList.add('is-invalid')
}

function valid (inp) {
	inp.classList.remove('is-invalid')
	inp.classList.add('is-valid')
}

document.querySelector('.pop-up__exit').addEventListener('click',function (){
	popOpen.classList.remove('active')
	bodyElem.classList.remove('active')
})

document.querySelector('.pop-up__bg-exit').addEventListener('click',function (){
	popOpen.classList.remove('active')
	bodyElem.classList.remove('active')
})

//Number Mask

var element = document.getElementById('form-number');
var maskOptions = {
	mask: '+{38} (000)000-00-00'
};
var mask = IMask(element, maskOptions);

