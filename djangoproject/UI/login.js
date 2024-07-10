const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");
const login_but = document.querySelector("#loginbutton")

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});


login_but.addEventListener('click', (event) =>{
    event.preventDefault();
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

function loginUser() {
    var usernameInput = document.getElementById("usernameInput");
    var username = usernameInput.value;

    
    if(!username=="")
    {
    localStorage.setItem("loggedInUsername", username);

    window.location.href = "main_ui.html"
    }
    else{
        alert("enter your username and password");
    }

}
function validateUsername(usernameInputId) {
    const username = document.getElementById(usernameInputId).value;
    if (username.trim() === "") {
      alert("Please enter your username.");
      return false;
    }
    return true;
  }
  
  function validateEmail() {
    const email = document.querySelector("input[type='email']").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }
  
  function validatePassword() {
    const password = document.querySelector("input[type='password']").value;
    if (password.trim() === "") {
      alert("Please enter your password.");
      return false;
    }
    return true;
  }