// Initialize an empty array to store transactions
let transactions = [];
let totalBalance = 0; // Track total balance

// Listen for the form submission to add a transaction
document.getElementById('transactionForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form refresh

    // Capture form data
    let type = document.getElementById('typeSelect').value;
    let amount = parseFloat(document.getElementById('amountInput').value).toFixed(2);
    let description = document.getElementById('descriptionInput').value;

    // Create a new transaction object
    let transaction = {
        type: type,
        amount: parseFloat(amount),
        description: description
    };

    // Add the transaction to the array
    transactions.push(transaction);

    // Update the total balance
    if (transaction.type === 'Income') {
        totalBalance += transaction.amount;
    } else if (transaction.type === 'Expense') {
        totalBalance -= transaction.amount;
    }

    // Update the total balance display
    document.getElementById('totalBalance').innerText = totalBalance.toFixed(2);

    // Add the transaction to the display
    addTransactionToDisplay(transaction);

    // Reset the form fields
    document.getElementById('transactionForm').reset();

    // Update the transaction count
    document.getElementById('transactionCount').innerText = `${transactions.length} Transactions`;
});

// Function to add a transaction to the display
function addTransactionToDisplay(transaction) {
    let container = document.getElementById('transactionContainer');

    // Create a new div for each transaction
    let newDiv = document.createElement('div');
    newDiv.className = 'transaction-item';

    // Create a paragraph to display transaction info
    let transactionText = document.createElement('p');
    transactionText.textContent = `${transaction.type}: $${transaction.amount.toFixed(2)} - ${transaction.description}`;

    // Append to the container
    newDiv.appendChild(transactionText);
    container.appendChild(newDiv);
}
