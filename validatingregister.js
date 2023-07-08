
// function validateEmail(emailId) {
//     var mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if(emailId.value.match(mailFormat)) {
//         document.newRegister.username.focus();
//         return true;
//     }
//     else {
//         alert("Invalid Email.");
//         document.newRegister.username.focus();
//         return false;
//     }

// };


// function validateName(nameId) {
//     var fullNameFormat = /^[a-zA-Z' ]+$/;
    
//     if(nameId.value.match(fullNameFormat)) {
//         document.newRegister.txtFullName.focus();
//         return true;
//     }
//     else {
//         alert("Invalid Full Name.");
//         document.newRegister.txtFullName.focus();
//         return false;
//     }

// };
 

// function validateForm(formId) {
//     var isValidateName = validateName(formId.txtName);
//     var isValidateEmail = validateEmail(formId.txtEmail);

//     return isValidateName && isValidateEmail;

//     // return validateEmail(formId.txtEmail);
//     // return validateName(formId.txtFullName);
//     // if(validateName(formId.txtName))
//     // return true
// };


// let array = newArray() {
//    [validateName(formId.txtName), validateEmail(formId.txtEmail)]
// };








// if (!validateEmail(formId.TxtEmail)) return false;
// if (!validateName(formId.txtName)) return false;
// return true
// };



// const isValidName = (name) => {
//     const re = /^[a-zA-Z' ]+$/;
//     return re.test(String(name).toLowerCase());
// }

// const isValidEmail = (email) => {
//     const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return re.test(String(email).toLowerCase());
//}



//OTHER METHOD


/*

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidName = txtFullName => {
    const re = /^[a-zA-Z' ]+$/;
    return re.test(String(txtFullName).toLowerCase());
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateImputs = () => {
    const txtFullNameValue = username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(txtFullNameValue === ''){
        setError(txtFullName, 'Username is required');
    }else if (!isValidName(txtFullNameValue)) {
        setError(txtFullName, 'Provide a valid name');
    } else {
        setSuccess(txtFullName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.lenght < 6 ) {
        setError(password, 'Password must be at least 6 character')
    } else {
        setSuccess(password);
    }

    if(password2Value  === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Passwords doesn`t match');
    } else {
        setSuccess(password2);
    }

};  */


// function ValidateEmail(input) {

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
//     if (input.value.match(validRegex)) {
  
//       alert("Valid email address!");
  
//       document.form.email.focus();
  
//       return true;
  
//     } else {
  
//       alert("Invalid email address!");
  
//       document.form.email.focus();
  
//       return false;
  
//     }
  
//   }




const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailRegex.test(emailInput.value)) {
    console.log('Valid email:', emailInput.value);

  } else {
    console.log('Invalid email');
  }
});


const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const nameRegex = /^[a-zA-Z' ]+$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameRegex.test(nameInput.value)) {
    console.log('Valid Name:', nameInput.value);

  } else {
    console.log('Invalid Name');
  }
});