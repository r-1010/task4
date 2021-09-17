const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const phone = document.getElementById('phnNUm')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null) {
        messages.push('First name is requried')
    }

    if (lname.value === '' || lname.value == null) {
        messages.push('Last name is required')
    }

    if (phone.value.length > 10) {
        messages.push('Phone number cannot exceed more than 10 characters')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length > 20) {
        messages.push('Passowrd must be less than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) {
        e.preventDefault() 
        errorElement.innerText = messages.join(', ')
    }
})
