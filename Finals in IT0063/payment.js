document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
    const orderSummaryContainer = document.getElementById("order-summary");
    const cartItems = [
        { name: "Item 1", price: 10, quantity: 2 },
        { name: "Item 2", price: 20, quantity: 1 }
    ];

    function displayOrderSummary() {
        orderSummaryContainer.innerHTML = "";
        let totalPrice = 0;

        cartItems.forEach(item => {
            const itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice;

            const itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price} x ${item.quantity}</p>
                <p>Total: $${itemTotalPrice}</p>
            `;
            orderSummaryContainer.appendChild(itemElement);
        });

        const totalPriceElement = document.createElement("p");
        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        orderSummaryContainer.appendChild(totalPriceElement);
    }

    displayOrderSummary();

 
    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();
 
        console.log("Payment confirmed");
    });
});
