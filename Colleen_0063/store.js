document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemId = this.getAttribute("data-item");
            console.log(`Item ${itemId} added to cart`);
        });
    });
});
