//Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Get the modal for Signup Section
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Signup section JavaScript Start
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
    showSuccess(input);
    } else {
    showError(input, 'Email is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
    } else {
        showSuccess(input);
    }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
    showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
    );
    } else if (input.value.length > max) {
    showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
    );
    } else {
    showSuccess(input);
    }
    
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// storing input from register-form
function store() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    if (password.value === password2.value && password.value.length > 5 && password.value.length < 25 && username.value.length > 2 && username.value.length < 15 && email.value) {
        store();
        window.open("/home_page/home.html","_self")
    } else {
        
    }
});
// Signup section in javascript end

// Login Section Start
// Variables
let txtuser = document.querySelector('.txtuser')
let txtpass = document.querySelector('.txtpass')
let submit = document.querySelector('.submit')

// local storage sets username and password fields to be 'username' and 'password'
// localStorage.setItem('user','username');
// localStorage.setItem('pass', 'password');

// declares message variable to return first element that matches selector
let message = document.querySelector('.message');


function myFunc(){
    // declares variables to match element ids
    const username = document.getElementById("txtuser")
    const password = document.getElementById("txtpwd")
    // retreives username and password values from local storage
    let user = localStorage.getItem('username', username.value);
    let pass = localStorage.getItem('password', password.value);
    //if username and password are entered into login and are the correct values matching local storage then show successful login and return to home page
    if(username.value == user && password.value == pass){
        message.innerHTML = "<span style='color: green;'>Login Successful</span>";
        window.open("/home_page/home.html","_self")
    } else { // if username and password do not match current local storage values then display 'Username or Password Is Invalid'
        message.innerHTML = "<span style='color: red;'>Username or Password Is Invalid</span>";
    }
    
}