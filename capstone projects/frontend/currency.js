
// currency.js

const currencies = [
  { code: "USD", name: "🇺🇸 US Dollar" },
  { code: "EUR", name: "🇪🇺 Euro" },
  { code: "GBP", name: "🇬🇧 British Pound" },
  { code: "INR", name: "🇮🇳 Indian Rupee" },
  { code: "JPY", name: "🇯🇵 Japanese Yen" },
  { code: "CNY", name: "🇨🇳 Chinese Yuan" },
  { code: "KRW", name: "🇰🇷 South Korean Won" },
  { code: "SGD", name: "🇸🇬 Singapore Dollar" },
  { code: "MYR", name: "🇲🇾 Malaysian Ringgit" },
  { code: "THB", name: "🇹🇭 Thai Baht" },
  { code: "IDR", name: "🇮🇩 Indonesian Rupiah" },
  { code: "PHP", name: "🇵🇭 Philippine Peso" },
  { code: "VND", name: "🇻🇳 Vietnamese Dong" },
  { code: "PKR", name: "🇵🇰 Pakistani Rupee" },
  { code: "BDT", name: "🇧🇩 Bangladeshi Taka" },
  { code: "LKR", name: "🇱🇰 Sri Lankan Rupee" },
  { code: "NPR", name: "🇳🇵 Nepalese Rupee" },
  { code: "AED", name: "🇦🇪 UAE Dirham" },
  { code: "SAR", name: "🇸🇦 Saudi Riyal" },
  { code: "QAR", name: "🇶🇦 Qatari Riyal" },
  { code: "KWD", name: "🇰🇼 Kuwaiti Dinar" },
  { code: "BHD", name: "🇧🇭 Bahraini Dinar" },
  { code: "OMR", name: "🇴🇲 Omani Rial" },
  { code: "JOD", name: "🇯🇴 Jordanian Dinar" },
  { code: "ILS", name: "🇮🇱 Israeli Shekel" },
  { code: "TRY", name: "🇹🇷 Turkish Lira" },
  { code: "RUB", name: "🇷🇺 Russian Ruble" },
  { code: "UAH", name: "🇺🇦 Ukrainian Hryvnia" },
  { code: "CHF", name: "🇨🇭 Swiss Franc" },
  { code: "SEK", name: "🇸🇪 Swedish Krona" },
  { code: "NOK", name: "🇳🇴 Norwegian Krone" },
  { code: "DKK", name: "🇩🇰 Danish Krone" },
  { code: "PLN", name: "🇵🇱 Polish Zloty" },
  { code: "CZK", name: "🇨🇿 Czech Koruna" },
  { code: "HUF", name: "🇭🇺 Hungarian Forint" },
  { code: "RON", name: "🇷🇴 Romanian Leu" },
  { code: "BGN", name: "🇧🇬 Bulgarian Lev" },
  { code: "AUD", name: "🇦🇺 Australian Dollar" },
  { code: "NZD", name: "🇳🇿 New Zealand Dollar" },
  { code: "CAD", name: "🇨🇦 Canadian Dollar" },
  { code: "MXN", name: "🇲🇽 Mexican Peso" },
  { code: "BRL", name: "🇧🇷 Brazilian Real" },
  { code: "ARS", name: "🇦🇷 Argentine Peso" },
  { code: "CLP", name: "🇨🇱 Chilean Peso" },
  { code: "COP", name: "🇨🇴 Colombian Peso" },
  { code: "PEN", name: "🇵🇪 Peruvian Sol" },
  { code: "ZAR", name: "🇿🇦 South African Rand" },
  { code: "EGP", name: "🇪🇬 Egyptian Pound" },
  { code: "NGN", name: "🇳🇬 Nigerian Naira" },
  { code: "KES", name: "🇰🇪 Kenyan Shilling" },
  { code: "TZS", name: "🇹🇿 Tanzanian Shilling" },
  { code: "UGX", name: "🇺🇬 Ugandan Shilling" },
  { code: "GHS", name: "🇬🇭 Ghanaian Cedi" },
  { code: "MAD", name: "🇲🇦 Moroccan Dirham" },
  { code: "DZD", name: "🇩🇿 Algerian Dinar" },
  { code: "TND", name: "🇹🇳 Tunisian Dinar" },
  { code: "ETB", name: "🇪🇹 Ethiopian Birr" },
  { code: "XOF", name: "🌍 West African CFA Franc" },
  { code: "XAF", name: "🌍 Central African CFA Franc" },
  { code: "FJD", name: "🇫🇯 Fijian Dollar" },
  { code: "BND", name: "🇧🇳 Brunei Dollar" },
  { code: "HKD", name: "🇭🇰 Hong Kong Dollar" },
  { code: "MOP", name: "🇲🇴 Macanese Pataca" },
  { code: "TWD", name: "🇹🇼 Taiwan Dollar" }
];

// Populate Dropdowns
window.addEventListener("DOMContentLoaded", () => {

    const from = document.getElementById("from");
    const to = document.getElementById("to");

    currencies.forEach(currency => {

        const option1 = document.createElement("option");
        option1.value = currency.code;
        option1.textContent = currency.name;

        const option2 = document.createElement("option");
        option2.value = currency.code;
        option2.textContent = currency.name;

        from.appendChild(option1);
        to.appendChild(option2);

    });

    from.value = "INR";
    to.value = "USD";

});
```
