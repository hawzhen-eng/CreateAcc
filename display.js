function file2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "inline";
  // document.getElementById('page3').style.display='none';
}

function file1() {
  document.getElementById("page1").style.display = "inline";
  document.getElementById("page2").style.display = "none";
  // document.getElementById('page3').style.display='none';
}
// function show3() {
//     document.getElementById('page3').style.display='inline';
// }
// const form = document.getElementById("form");
// const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const adress = document.getElementById("adress");
// const city = document.getElementById("city");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

// function checkInputs() {
//   // trim to remove the whitespaces
//   const firstNameValue = firstName.value.trim();
//   const lastNameValue = lastName.value.trim();
//   const adressValue = adress.value.trim();
//   const cityValue = city.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   if (firstNameValue === "") {
//     setErrorFor(firstName, "Please enter your first name");
//   } else {
//     setSuccessFor(firstName);
//   }

//   if (lastNameValue === "") {
//     setErrorFor(lastName, "Please enter your last name");
//   } else {
//     setSuccessFor(lastName);
//   }

//   if (adressValue === "") {
//     setErrorFor(adress, "Please enter your adress");
//   } else {
//     setSuccessFor(adress);
//   }
//   if (cityValue === "") {
//     setErrorFor(city, "Please enter your adress");
//   } else {
//     setSuccessFor(adress);
//   }

//   if (emailValue === "") {
//     setErrorFor(email, "Email Address cannot be blank");
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, "Not a valid email");
//   } else {
//     setSuccessFor(email);
//   }

//   if (passwordValue === "") {
//     setErrorFor(password, "Password cannot be blank");
//   } else if (!isPassword(passwordValue)) {
//     setErrorFor(password, "Not a valid password");
//   } else {
//     setSuccessFor(password);
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "form-control error";
//   small.innerText = message;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

function isEmail(email) {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/.test(password);
}
