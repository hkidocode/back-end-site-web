// Select all input field in the website
const fullName = document.querySelector('#fname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cpassword');
const submitRegister = document.getElementById('registrationForm');
const submitLogin = document.getElementById('login');
const submitContact = document.getElementById('contact');





// Check full name if contains letters in a-z in lowercase
function isValidFullName(fullName) {
    const regex = /^[a-zA-Z ]+$/;
    if (regex.test(fullName.value)) {
        setSuccessFor(fullName);
    } else {
        setErrorFor(fullName, "Enter a valid full name", 0);
    }
}



// Check email adress
function isValidEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value)) {
        setSuccessFor(email);
    } else {
        setErrorFor(email, "Enter a valid email adress", 1);
    }
}


// Check password 
function isValidPassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
    if (regex.test(password.value)) {
        setSuccessFor(password);
    } else {
        setErrorFor(password,
            "Enter 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter",
             2);
    }
}

// check if the passwords are matched
function matchPassword(password, confirmPassword) {
    if (password.value === confirmPassword.value) {
        setSuccessFor(password);
        setSuccessFor(confirmPassword);
    } else {
        setErrorFor(password, "Password confirmation doesn\'t match", 2);
        setErrorFor(confirmPassword, "Password confirmation doesn't match", 3);
    }
}




// Add border color to input if exist and match the existing regular expression 
function setSuccessFor(input) {
    input.classList.add('border-success');
    input.nextElementSibling.textContent = "";
    console.log("success");
}

// Add styles to input if not exist and not match the existing regular expression 
function setErrorFor(input, message, index) {
    const smallMessage = document.getElementsByClassName('message-small')[index];
    input.classList.add('border');
    input.classList.add('border-danger');
    smallMessage.textContent = message;
    smallMessage.classList.add('text-danger');
    console.log("error");
}


submitRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    matchPassword(password, confirmPassword);
    isValidFullName(fullName);
    isValidEmail(email);
    isValidPassword(password);
    

});