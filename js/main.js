// sign in
// localStorage.clear();
var mail = document.getElementById("mail");
var pass = document.getElementById("pass");
var btn = document.getElementById("signBtn");
var signInBtn = document.getElementById("sign-in-btn");
var signinDiv = document.getElementById("sign-in");

// sign up
var signUpName = document.getElementById("signName");
var signUpMail = document.getElementById("signMail");
var signUpPass = document.getElementById("signPass");
var signBtn = document.getElementById("signUpBtn");
var signupDiv = document.getElementById("sign-up");
var signupLink = document.getElementById("sign-up-link");
var userList = [];
// if (localStorage.getItem("userss") == null) {
//   userList = [];
//   console.log("empty");
// } else {
//   userList = JSON.parse(localStorage.getItem("uesrss"));
//   console.log("done");
// }

(function () {
  signupDiv.classList.add("d-none");
  signinDiv.classList.add("d-grid");
})();
// sign in link
signInBtn.addEventListener("click", function () {
  signinDiv.classList.replace("d-grid", "d-none");
  signupDiv.classList.replace("d-none", "d-grid");
});

// sign up link
signupLink.addEventListener("click", function () {
  signupDiv.classList.replace("d-grid", "d-none");
  signinDiv.classList.replace("d-none", "d-grid");
  pMail.classList.remove("d-grid");
});

// local storage function
function users() {
  var user = {
    name: signUpName.value,
    email: signUpMail.value,
    password: signUpPass.value,
  };
  userList.push(user);
  localStorage.setItem("userss", JSON.stringify(userList));
  console.log(userList.length);

  reset();
}

var signUpAlert = document.getElementById("signupAlert");

// sign up button
signBtn.addEventListener("click", function () {
  validation();
});

// reset after sign up
function reset() {
  signUpName.value = ``;
  signUpMail.value = ``;
  signUpPass.value = ``;
}
var pMail = document.getElementById("signinPMail");
// siggned
var signnedDiv = document.getElementById("signned");
var hello = document.getElementById("welcome");

// sign in button
btn.addEventListener("click", function () {
  for (var i = 0; i < userList.length; i++) {
    if (mail.value == userList[i].email && pass.value == userList[i].password) {
      // signupDiv.classList.replace("d-grid", "d-none");
      signinDiv.classList.replace("d-grid", "d-none");
      signnedDiv.classList.replace("d-none", "d-grid");
      hello.innerHTML = `Welcome ${userList[i].name}`;
    } else {
      pMail.innerHTML = `incorrect email or password`;
      pMail.classList.replace("d-none", "d-grid");
    }
  }
});

// log out
var logOut = document.getElementById("logout");

logOut.addEventListener("click", function () {
  signinDiv.classList.replace("d-none", "d-grid");
  signnedDiv.classList.replace("d-grid", "d-none");
  pMail.classList.replace("d-grid", "d-none");
});

function validation() {
  // debugger;
  var validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*.com$/;
  var validNameRegex = /^[a-zA-Z\-]+$/;
  var validPasswordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (
    validNameRegex.test(signUpName.value) == true &&
    validEmailRegex.test(signUpMail.value) == true &&
    validPasswordRegex.test(signUpPass.value) == true
  ) {
    console.log("true");
    users();
    reset();
    return true;
  } else {
    console.log("false");
    return false;
  }
}
