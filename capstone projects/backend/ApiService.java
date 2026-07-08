```java
// ApiService.java

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ApiService {

    // Free Exchange Rate API
    private static final String API_URL =
            "https://open.er-api.com/v6/latest/";

    public double getExchangeRate(String from, String to) throws Exception {

        // Example:
        // https://open.er-api.com/v6/latest/USD

        URL url = new URL(API_URL + from);

        HttpURLConnection connection =
                (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("GET");

        BufferedReader reader =
                new BufferedReader(
                        new InputStreamReader(
                                connection.getInputStream()));

        StringBuilder response = new StringBuilder();

        String line;

        while ((line = reader.readLine()) != null) {

            response.append(line);

        }

        reader.close();

        // Parse JSON
        JsonParser parser = new JsonParser();

        return parser.getRate(response.toString(), to);

    }

}
```
