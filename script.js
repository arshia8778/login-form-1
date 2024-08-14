const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const password_confirm_input = document.getElementById(
  "password-confirm-input"
);
const submit_btn = document.getElementById("submit-btn");
const email_error = document.getElementById("email-massage");
const password_error = document.getElementById("password-massage");
const password_confirm_error = document.getElementById(
  "password-confirm-massage"
);

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

email_input.addEventListener("input", function () {
  var email_value = email_input.value;

  try {
    if (isValidEmail(email_value)) {
      email_error.innerHTML = "Email is entered correctly.";
      email_error.className = "success";
    } else {
      throw new Error("Please enter the correct email.");
    }
  } catch (error) {
    email_error.innerHTML = error.message;
    email_error.className = "error";
  }
});

password_input.addEventListener("input", function () {
  var password_value = password_input.value;
  try {
    if (password_value.length < 8) {
      password_error.innerHTML = "Your password must be more than 8 characters";
      password_error.className = "error";
    } else {
      throw new Error("password is entered correctly.");
    }
  } catch (error) {
    password_error.innerHTML = error.message;
    password_error.className = "success";
  }
});

password_confirm_input.addEventListener("input", function () {
  var password_value = password_input.value;
  var password_confirm_value = password_confirm_input.value;
  try {
    if (password_value === password_confirm_value) {
      password_confirm_error.innerHTML = "Your password has been confirmed";
      password_confirm_error.className = "success";
    } else {
      throw new Error("Your password has not been confirmed");
    }
  } catch (error) {
    password_confirm_error.innerHTML = error.message;
    password_confirm_error.className = "error";
  }
});

submit_btn.addEventListener("click", function(){
  var password_value = password_input.value;
  var password_confirm_value = password_confirm_input.value;
  var email_value = email_input.value;

  if (isValidEmail(email_value) && password_value.length > 8 && password_value === password_confirm_value) {
    Swal.fire({
      icon: "success",
      title: "Sign up...",
      text: "Your Sign up was successful",
      customClass: {
          popup: "success1",
      },
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error...",
      text: "Your Sign up was not successful",
      customClass: {
          popup: "success1",
      },
    });
  }
})

var users = [{ username: email_input.value, Password: password_input.value }];
