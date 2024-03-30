document.addEventListener("DOMContentLoaded", function () {
    
    const homeButtons = document.querySelectorAll("#home-page-buttons button");
    homeButtons.forEach(button => {
        button.addEventListener("click", function () {
            
            console.log(`Button "${button.textContent}" clicked on the Home page`);
        });
    });

    const registrationButtons = document.querySelectorAll("#registration-page-buttons button");
    registrationButtons.forEach(button => {
        button.addEventListener("click", function () {
            
            console.log(`Button "${button.textContent}" clicked on the Registration page`);
        });
    });
    const storeButtons = document.querySelectorAll("#store-page-buttons button");
    storeButtons.forEach(button => {
        button.addEventListener("click", function () {
            
            console.log(`Button "${button.textContent}" clicked on the Store page`);
        });
    });

    const cartButtons = document.querySelectorAll("#cart-page-buttons button");
    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log(`Button "${button.textContent}" clicked on the Cart page`);
        });
    });

    const paymentButtons = document.querySelectorAll("#payment-page-buttons button");
    paymentButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log(`Button "${button.textContent}" clicked on the Payment page`);
        });
    });

    const historyButtons = document.querySelectorAll("#history-page-buttons button");
    historyButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log(`Button "${button.textContent}" clicked on the Transaction History page`);
        });
    });
    const profileButtons = document.querySelectorAll("#profile-page-buttons button");
    profileButtons.forEach(button => {
        button.addEventListener("click", function () {

            console.log(`Button "${button.textContent}" clicked on the Profile page`);
        });
    });
});
