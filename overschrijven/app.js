// app.js

// Selecteer de benodigde elementen
const addAccountBtn = document.getElementById('add-account-btn');
const newAccountForm = document.getElementById('new-account-form');
const saveAccountBtn = document.getElementById('save-account-btn');
const accountsList = document.getElementById('accounts-list');
const accountNameInput = document.getElementById('account-name');
const accountBalanceInput = document.getElementById('account-balance');

// Knop om nieuw accountformulier te tonen
addAccountBtn.addEventListener('click', () => {
  newAccountForm.style.display = 'block';
});

// Knop om een nieuwe rekening toe te voegen
saveAccountBtn.addEventListener('click', () => {
  const accountName = accountNameInput.value.trim();
  const accountBalance = parseFloat(accountBalanceInput.value);

  if (accountName && !isNaN(accountBalance)) {
    // Voeg een nieuw lijstitem toe
    const newAccount = document.createElement('li');
    newAccount.innerHTML = `${accountName}: <span>€${accountBalance.toFixed(2)}</span>`;
    accountsList.appendChild(newAccount);

    // Maak de invoervelden leeg
    accountNameInput.value = '';
    accountBalanceInput.value = '';

    // Verberg het formulier
    newAccountForm.style.display = 'none';
  } else {
    alert('Vul een geldige rekeningnaam en saldo in.');
  }
});
