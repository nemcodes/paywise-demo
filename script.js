document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const utility = document.getElementById("utilityType").value;
  const meter = document.getElementById("meterNumber").value;
  const amount = document.getElementById("amount").value;

  if (!utility || !meter || !amount) {
    alert("Please fill all fields correctly.");
    return;
  }

  // Simulate success
  document.getElementById(
    "result"
  ).textContent = `Payment of ₦${amount} for ${utility} was successful!`;
});
