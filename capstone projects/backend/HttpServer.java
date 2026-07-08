import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.Map;

public class HttpServer {

    private com.sun.net.httpserver.HttpServer server;

    public HttpServer(int port) throws IOException {

        server = com.sun.net.httpserver.HttpServer.create(
                new InetSocketAddress(port), 0);

        server.createContext("/convert", new ConvertHandler());

        server.setExecutor(null);

    }

    public void start() {

        server.start();

    }

    static class ConvertHandler implements HttpHandler {

        @Override
        public void handle(HttpExchange exchange) throws IOException {

            exchange.getResponseHeaders().add(
                    "Access-Control-Allow-Origin", "*");

            exchange.getResponseHeaders().add(
                    "Content-Type", "application/json");

            String query = exchange.getRequestURI().getQuery();

            Map<String, String> params = getQueryParams(query);

            String from = params.get("from");
            String to = params.get("to");
            double amount = Double.parseDouble(params.get("amount"));

            CurrencyConverter converter = new CurrencyConverter();

            String json = converter.convert(from, to, amount);

            exchange.sendResponseHeaders(200, json.getBytes().length);

            OutputStream os = exchange.getResponseBody();

            os.write(json.getBytes());

            os.close();

        }

        private Map<String, String> getQueryParams(String query) {

            Map<String, String> map = new HashMap<>();

            if (query == null)
                return map;

            String[] pairs = query.split("&");

            for (String pair : pairs) {

                String[] parts = pair.split("=");

                if (parts.length == 2) {

                    map.put(parts[0], parts[1]);

                }

            }

            return map;

        }

    }

}

