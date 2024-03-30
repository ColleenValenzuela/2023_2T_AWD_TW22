document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    document.getElementById("toggle-signup").addEventListener("click", function () {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    document.getElementById("toggle-login").addEventListener("click", function () {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });
});
