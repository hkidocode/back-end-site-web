// Select all input field in the website
const fullName = document.querySelector('#fname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#cpassword');
const submitRegister = document.querySelector('#registrationForm');
const submitLogin = document.querySelector('#login');
const submitContact = document.querySelector('#contact');



// Check full name if contains letters in a-z in lowercase
function isValidFullName(fullName) {
  const regex = /^[a-zA-Z ]+$/  ;
  if (regex.test(fullName.value)) {
    setSuccessFor(fullName);
  } else {
    setErrorFor(fullName, "Enter a last name");
  }
}



// Check email adress
function isValidEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email.value)) {
    setSuccessFor(email);
  } else {
    setErrorFor(email, "Enter a valid email adress");
  }
}


// Check password 
function isValidPassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (regex.test(password.value)) {
    setSuccessFor(password);
  } else {
    setErrorFor(password,
      `Enter 6 to 20 characters which contain at 
       least one numeric digit, one uppercase and 
       one lowercase letter`
    );
  }
}

// check if the passwords are matched
function matchPassword (password, confirmPassword) {
    if(password.value === confirmPassword.value) {
        setSuccessFor(password);
        setSuccessFor(confirmPassword);
    } else {
        setErrorFor(password, `Password confirmation doesn't match`);
        setErrorFor(confirmPassword, `Password confirmation doesn't match`);
    }
}




// Add border color to input if exist and match the existing regular expression 
function setSuccessFor(input) {
  input.classList.add('border-success');
  console.log("success");
}

// Add styles to input if not exist and not match the existing regular expression 
function setErrorFor(input, message) {
  const smallMessage = document.querySelector('.form-group .message');
  input.classList.add('border');
  input.classList.add('border-danger');
  smallMessage.classList.add('invisible');
  smallMessage.innerHTML = message;
  smallMessage.classList.add('text-danger');
  console.log("error");
}


submitRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  isValidFullName(fullName);
  isValidEmail(email);
  isValidPassword(password);
  matchPassword(password, confirmPassword);

});