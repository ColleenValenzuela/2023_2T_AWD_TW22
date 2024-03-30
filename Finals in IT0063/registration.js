document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const playerIDInput = document.getElementById("player-id");

    playerIDInput.setAttribute("id", generateUniqueID());

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add("is-invalid");
        } else {
            emailInput.classList.remove("is-invalid");
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.classList.add("is-invalid");
        } else {
            confirmPasswordInput.classList.remove("is-invalid");
        }

        if (form.checkValidity() && validateEmail(emailInput.value) && passwordInput.value === confirmPasswordInput.value) {
            console.log("Form submitted successfully");
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

 
    function generateUniqueID() {
        return "player-" + Math.random().toString(36).substr(2, 9);
    }
});
