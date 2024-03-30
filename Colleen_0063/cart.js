document.addEventListener("DOMContentLoaded", function () {
   
    let cartItems = [
        { id: 1, name: "Item 1", price: 10, quantity: 2, image: "item1.jpg" },
        { id: 2, name: "Item 2", price: 20, quantity: 1, image: "item2.jpg" }
    ];

    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");
    const proceedToPaymentButton = document.getElementById("proceed-to-payment");

    
    function displayCartItems() {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        cartItems.forEach(item => {
            const itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice;

            const itemElement = document.createElement("div");
            itemElement.classList.add("list-group-item");
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image" style="width: 100px; height: auto;">
                <div>
                    <h5>${item.name}</h5>
                    <p>Price: $${item.price} each</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: $${itemTotalPrice}</p>
                </div>
                <button class="btn btn-danger btn-remove-item" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    displayCartItems();

    
    cartItemsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-remove-item")) {
            const itemId = parseInt(event.target.getAttribute("data-id"));
            cartItems = cartItems.filter(item => item.id !== itemId);
            displayCartItems();
        }
    });

    
    proceedToPaymentButton.addEventListener("click", function () {
       
        console.log("Proceed to payment clicked");
    });
});
