function validateName() {
  let nameinput = document.getElementById("name").value;
  let nameRegexp = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;
  return nameRegexp.test(nameinput);
}

function validateEmail() {
  let emailinput = document.getElementById("email").value;
  let emailRegexp = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegexp.test(emailinput);
}

function validatePhone() {
  let phoneinputphoneinput = document.getElementById("Phone").value;
  let phoneRegexp = /^\+201[0125][0-9]{8}$/;
  return phoneRegexp.test(phoneinputphoneinput);
}

function validatePassword() {
  let passwordinput = document.getElementById("password").value;
  let passwordRegexp = /^[A-Za-z\d]{8,}$/;
  return passwordRegexp.test(passwordinput);
}

document.getElementById("validation").onsubmit = function (submit) {
  submit.preventDefault();
  let namevalidation = validateName();
  let emailvalidation = validateEmail();
  let phonevalidation = validatePhone();
  let passwordvalidation = validatePassword();
  if (
    namevalidation &&
    emailvalidation &&
    phonevalidation &&
    passwordvalidation
  ) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your work has been saved",
    });
  } else {
    let errorMessage = "Please correct the following errors:\n";
    if (!namevalidation) {
      errorMessage += "- Invalid name format.\n";
    }
    if (!emailvalidation) {
      errorMessage += "- Invalid email format.\n";
    }
    if (!phonevalidation) {
      errorMessage += "- Invalid phone number format.\n";
    }
    if (!passwordvalidation) {
      errorMessage +=
        "- Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.\n";
    }
    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: errorMessage,
    });
  }
  return false;
};
