
const exchangeRates = {
  USD: { USD: 1, INR: 85.74, EUR: 0.92, GBP: 0.81, AUD: 1.56 },
  INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0094, AUD: 0.018 },
  EUR: { USD: 1.09, INR: 93.22, EUR: 1, GBP: 0.88, AUD: 1.70 },
  GBP: { USD: 1.23, INR: 106.14, EUR: 1.14, GBP: 1, AUD: 1.92 },
  AUD: { USD: 0.64, INR: 55.29, EUR: 0.59, GBP: 0.52, AUD: 1 },
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const amount = parseFloat(document.getElementById("amount").value.trim());
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
