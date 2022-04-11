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
let select = document.querySelector('.dropdown-js__current')
let selectAttr = select.getAttribute('data-value')
let errSelect = document.querySelector('.select-js')


let send = document.querySelector('.form__success')

var regNumber = /^[\d ()+-]+$/

var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let count = 0

document.querySelector('.form__btn').addEventListener('click' , function(e){
	e.preventDefault()

	if (formInp.value.length < 3) {
		notValid(errName)
		count--
	} else {
		valid(errName)
		count++
	}

	if (!isPhone(regNumber)&& inpNumber.value.length <= 3) {
		notValid(errNumber)
		count--
	} else {
		valid(errNumber)
		count++
	}

	if(!isEmail(regEmail)&& inpEmail.value.length <=3) {
		notValid(errEmail)
		count--
	} else {
		valid(errEmail)
		count++
	}

	if(selectAttr === 'unset') {
		notValid(errSelect)
		count--
	}

	if (selectAttr != 'unset') {
		valid(errSelect)
		count++
	}

	if(count < 3) {
		send.innerHTML = 'You form invalid'
		send.style.color = 'red'
		count = 0
	}

	if(count == 3) {
		inpName.value = ''
		inpNumber.value = ''
		inpEmail.value = ''
		send.innerHTML = 'Your form send!'
		send.style.color = 'green'
		count = 0
	}
	console.log(count)
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



