document.addEventListener("DOMContentLoaded", function () {
    const transactionHistoryContainer = document.getElementById("transaction-history");

    const transactions = [
        { date: "2024-03-15", items: ["Item 1", "Item 2"], total: 30 },
        { date: "2024-03-10", items: ["Item 3"], total: 15 }
    ];


    function displayTransactionHistory() {
        transactionHistoryContainer.innerHTML = "";

        transactions.forEach(transaction => {
            const transactionElement = document.createElement("div");
            transactionElement.classList.add("transaction");
            transactionElement.innerHTML = `
                <p>Date: ${transaction.date}</p>
                <p>Items: ${transaction.items.join(", ")}</p>
                <p>Total: $${transaction.total.toFixed(2)}</p>
            `;
            transactionHistoryContainer.appendChild(transactionElement);
        });
    }

    displayTransactionHistory();
});
