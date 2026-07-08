   public class Main {

    public static void main(String[] args) {

        try {

            HttpServer server = new HttpServer(8080);

            server.start();

            System.out.println("======================================");
            System.out.println(" GlobeXchange Backend Started");
            System.out.println(" Server Running...");
            System.out.println(" URL : http://localhost:8080");
            System.out.println("======================================");

        } catch (Exception e) {

            System.out.println("Failed to Start Server");

            e.printStackTrace();

        }

    }

}

