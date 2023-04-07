// AstroPhotogrphy Slider





  const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }


  // Astrophotography image slider
  var slideIndex = 1;
  showSlide(slideIndex);
  
  // Call the autoSlide() function every 3 seconds
  var slideTimer = setInterval(autoSlide, 3000);
  
  function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }
  
  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
    clearInterval(slideTimer); // Clear the timer when the user clicks the navigation buttons
  }
  
  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    clearInterval(slideTimer); // Clear the timer when the user clicks the navigation buttons
  }
  
  function showSlide(n) {
    var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].className = "inactive";
    }
    slides[slideIndex-1].className = "active";
  }
  


  // footer searchbar
  const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function() {
  const id = searchInput.value;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  } else {
    alert('Element not found.');
  }
});


                            //  Sign up               ///
// Get the sign-up and login form elements
const signUpForm = document.getElementById("sign-up-form");
const loginForm = document.getElementById("login-form");

// Get the sign-up and login links
const signUpLink = document.getElementById("sign-up-link");
const loginLink = document.getElementById("login-link");

// Get the close buttons for the forms
const closeButtons = document.querySelectorAll(".auth-form button.close");

// Function to show a form
function showForm(form) {
  // Show the form
  form.style.display = "block";

  // Add a click event listener to the close button
  form.querySelector("button.close").addEventListener("click", () => {
    // Hide the form
    form.style.display = "none";
  });
}

// Add a click event listener to the sign-up link
signUpLink.addEventListener("click", () => {
  showForm(signUpForm);
});

// Add a click event listener to the login link
loginLink.addEventListener("click", () => {
  showForm(loginForm);
});

// Add a submit event listener to the sign-up form
signUpForm.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the email and password inputs
  const emailInput = signUpForm.querySelector("#signup-email");
  const passwordInput = signUpForm.querySelector("#signup-password");

  // TODO: Send sign-up data to server and handle response

  // Clear the inputs
  emailInput.value = "";
  passwordInput.value = "";

  // Hide the sign-up form and show the login form
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

// Add a submit event listener to the login form
loginForm.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the email and password inputs
  const emailInput = loginForm.querySelector("#login-email");
  const passwordInput = loginForm.querySelector("#login-password");

  // TODO: Send login data to server and handle response

  // Clear the inputs
  emailInput.value = "";
  passwordInput.value = "";

  // Redirect to the home page
  window.location.href = "signUp.html";
});


``



//                              animating images




         