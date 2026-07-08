const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const result = document.getElementById("result");

function swapCurrency() {

    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;

}

async function convertCurrency() {

    const amount = amountInput.value.trim();

    if (amount === "" || Number(amount) <= 0) {
        result.innerHTML = "❌ Please enter a valid amount.";
        return;
    }

    if (fromSelect.value === toSelect.value) {
        result.innerHTML = "⚠️ Please select different currencies.";
        return;
    }

    result.innerHTML = "⏳ Converting...";

    try {

        const response = await fetch(
            `http://localhost:8080/convert?from=${fromSelect.value}&to=${toSelect.value}&amount=${amount}`
        );

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const data = await response.json();

        result.innerHTML = `
            <h3>✅ Conversion Successful</h3>

            <p><strong>${amount} ${data.from}</strong></p>

            <h2>${data.converted} ${data.to}</h2>

            <hr>

            <p>
                Exchange Rate:
                1 ${data.from} = ${data.rate} ${data.to}
            </p>

            <p>
                Last Updated:
                ${data.updated}
            </p>
        `;

    } catch (error) {

        result.innerHTML = `
            ❌ Unable to connect to Java Backend.
            <br><br>
            Start your backend server on Port 8080.
        `;

        console.error(error);

    }

}

amountInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        convertCurrency();
    }

});

