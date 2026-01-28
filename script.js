/* document.querySelector(".btn").addEventListener("click", () => {
      alert("Welcome to TechEdu! Courses coming soon 🚀");
});*/
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
const modal = document.getElementById("authModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const modalTitle = document.getElementById("modalTitle");

// Open Modal
openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Switch to Signup
showSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    modalTitle.innerText = "Sign Up";
});

// Switch to Login
showLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    modalTitle.innerText = "Login";
});

// Close modal on background click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// Open modal
const forgotLink = document.getElementById("forgotPasswordLink");
const forgotModal = document.getElementById("forgotPasswordModal");
const closeForgot = document.getElementById("closeForgot");

forgotLink.addEventListener("click", () => {
    forgotModal.style.display = "flex";
});

// Close modal
closeForgot.addEventListener("click", () => {
    forgotModal.style.display = "none";
});

// Close if clicked outside modal content
window.addEventListener("click", (e) => {
    if (e.target == forgotModal) {
        forgotModal.style.display = "none";
    }
});

// Example login submit
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Validate login (mock)
    window.location.href = 'dashboard.html';
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
    alert("Logged out!");
    // Redirect to login page
    window.location.href = "login.html";
});
fetch('/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John',
        email: 'john@email.com',
        message: 'Hello'
    })
})
.then(res => res.json())
.then(data => console.log(data));
