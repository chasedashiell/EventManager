import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;

public class PasswordManager {
    private static String generateSHA256Hash(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(input.getBytes(StandardCharsets.UTF_8));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1)
                    hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 algorithm not available", e);
        }
    }

    public static void addUser(String userName, String password) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("users.csv"));
            String line = reader.readLine();
            ArrayList<User> users = new ArrayList<>();
            while (line != null){
                while (line != null){
                    String[] a = line.split(",");
                    if (a.length >= 2) {
                        users.add(new User(a[0], a[1]));
                    }
                    line = reader.readLine();
                }
            }
            users.add(new User(userName, password));
            reader.close();
            for (int i = 0; i < users.size(); i++) {
                String minValue = users.get(i).getName();
                int minIndex = i;
                for (int j = i; j < users.size(); j++) {
                    if (minValue.compareTo(users.get(j).getName()) > 0) {
                        minValue = users.get(j).getName();
                            minIndex = j;
                    }
                }
                User tmp = users.get(i);
            users.set(i, users.get(minIndex));
            users.set(minIndex, tmp);
            }





            FileWriter writer = new FileWriter("users.csv");
            for (User u : users){
                writer.write(u.getName() + "," + generateSHA256Hash( u.getPassword()));
                writer.write(System.lineSeparator());
            }
            writer.close();
        } catch (Exception e) {
            System.out.println(e);
        }

    }

    private static void sortCSV(){

    }

    public static void authorizePassword(String user, String password){
        String hashPw = generateSHA256Hash(password);
        


    }

}
