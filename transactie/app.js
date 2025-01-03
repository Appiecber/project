const transactions = [
    { id: 1, type: "inkomend", datum: "2024-11-01", bedrag: 150.00 },
    { id: 2, type: "uitgaand", datum: "2024-11-03", bedrag: -5.00 },
    { id: 3, type: "inkomend", datum: "2024-11-05", bedrag: 200.00 },
    { id: 4, type: "uitgaand", datum: "2024-11-10", bedrag: -30.00 }
];

function displayTransactions(filteredTransactions) {
    const table = document.getElementById("transactionTable");
    table.innerHTML = ""; // Leeg de tabel

    filteredTransactions.forEach(transaction => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.type}</td>
            <td>${transaction.datum}</td>
            <td>${transaction.bedrag}</td>
        `;
        table.appendChild(row);
    });
}

function applyFilters() {
    const typeFilter = document.getElementById("typeFilter").value;
    const dateFilter = document.getElementById("dateFilter").value;

    let filteredTransactions = transactions;

    if (typeFilter !== "all") {
        filteredTransactions = filteredTransactions.filter(t => t.type === typeFilter);
    }

    if (dateFilter) {
        filteredTransactions = filteredTransactions.filter(t => t.datum === dateFilter);
    }

    displayTransactions(filteredTransactions);
}

// Toon alle transacties bij het laden van de pagina
document.addEventListener("DOMContentLoaded", () => {
    displayTransactions(transactions);
    document.getElementById("filterButton").addEventListener("click", applyFilters);
});
