const form = document.getElementById('form')
const firstNameInput = document.getElementById('firstNameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const repeatPasswordInput = document.getElementById('repeatPasswordInput')
const errorMessage = document.getElementById('errorMessage')

form.addEventListener('submit', (e) => {

   let errors = []

   if(firstNameInput) {
    errors = getSignupFormErrors(firstNameInput.value, emailInput.value, passwordInput.value, repeatPasswordInput.value)
   }
   else {
    errors = getLoginFormErrors(emailInput.value, passwordInput.value)
   }
   if(errors.length > 0) {
    e.preventDefault()
    errorMessage.innerText = errors.join('. ')
   }
})

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = []

    if(firstname === '' || firstname == null) {
        errors.push('First name is required')
        firstNameInput.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null) {
        errors.push('Email is required')
        emailInput.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null) {
        errors.push('Password is required')
        passwordInput.parentElement.classList.add('incorrect')
    }
    if(password.length <8){
        errors.push('Password must have at least 8 characters')
        passwordInput.parentElement.classList.add('incorrect')
    }
    if(password !== repeatPassword) {
        errors.push('Password does not match repeated password')
        passwordInput.parentElement.classList.add('incorrect')
        repeatPasswordInput.parentElement.classList.add('incorrect')
    }

    return errors;
}

function getLoginFormErrors(email, password){
    let errors = []

    if(email === '' || email == null) {
        errors.push('Email is required')
        emailInput.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null) {
        errors.push('Password is required')
        passwordInput.parentElement.classList.add('incorrect')
    }
    
    return errors;
}

const allinputs = [firstNameInput, emailInput, passwordInput, repeatPasswordInput].filter(input => input != null)

    allinputs.forEach(input => {
        input.addEventListener('input', () => {
            if(input.parentElement.classList.contains('incorrect')) {
              input.parentElement.classList.remove('incorrect')
              errorMessage.innerText = ''
            }
     })
})

