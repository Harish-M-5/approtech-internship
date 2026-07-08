

public class CurrencyConverter {

    private ApiService apiService;

    public CurrencyConverter() {
        apiService = new ApiService();
    }

    public String convert(String from, String to, double amount) {

        try {

            // Get exchange rate from API
            double rate = apiService.getExchangeRate(from, to);

            // Calculate converted amount
            double convertedAmount = amount * rate;

            // Build JSON response
            String json =
                    "{"
                    + "\"from\":\"" + from + "\","
                    + "\"to\":\"" + to + "\","
                    + "\"amount\":" + amount + ","
                    + "\"converted\":" + String.format("%.2f", convertedAmount) + ","
                    + "\"rate\":" + rate + ","
                    + "\"updated\":\"Live Exchange Rate\""
                    + "}";

            return json;

        } catch (Exception e) {

            return "{"
                    + "\"error\":\"Currency conversion failed.\""
                    + "}";

        }

    }

}
```
