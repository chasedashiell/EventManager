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

    public static boolean addUser(String userName, String password) {
        if (!searchForUser(userName)) {
            System.out.println("Username already exists");
            return false;
        }
        try {
            BufferedReader reader = new BufferedReader(new FileReader("users.csv"));
            String line = reader.readLine();
            ArrayList<User> users = new ArrayList<>();
            while (line != null) {
                while (line != null) {
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
            for (User u : users) {
                writer.write(u.getName() + "," + generateSHA256Hash(u.getPassword()));
                writer.write(System.lineSeparator());
            }
            writer.close();
        } catch (Exception e) {
            System.out.println(e);
        }
        return true;
    }

    public static boolean searchForUser(String username) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("users.csv"));
            String line = reader.readLine();
            ArrayList<User> users = new ArrayList<>();
            while (line != null) {
                while (line != null) {
                    String[] a = line.split(",");
                    if (a.length >= 2) {
                        users.add(new User(a[0], a[1]));
                    }
                    line = reader.readLine();
                }
            }
            reader.close();
            for (User u : users) {
                if (u.getName().equals(username)) {
                    return false;
                }
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return true;
    }

    public static boolean authorizePassword(String username, String password) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("users.csv"));
            String line = reader.readLine();
            ArrayList<User> users = new ArrayList<>();
            while (line != null) {
                while (line != null) {
                    String[] a = line.split(",");
                    if (a.length >= 2) {
                        users.add(new User(a[0], a[1]));
                    }
                    line = reader.readLine();
                }
            }
            reader.close();
            int indexOfUser = orderedBinarySearch(users, username);
            System.out.println(users.get(0).getPassword());
            System.out.println(generateSHA256Hash(password));
            if (indexOfUser == -1) {
                return false;
            } else if (users.get(indexOfUser).getPassword().equals(generateSHA256Hash(password))) {
                return true;
            }

        } catch (Exception e) {
            System.out.println(e);
        }
        return false;
    }

    private static int orderedBinarySearch(ArrayList<User> items, String term) {
        int max = items.size() - 1;
        int mid = items.size() / 2;
        int min = 0;
        for (int i = 0; i < items.size(); i++) {
            if (items.get(mid).getName().compareTo(term) == 0) {
                return mid;
            } else if (items.get(mid).getName().compareTo(term) < 0) {
                max = mid;
                mid = max / 2;
            } else if (items.get(mid).getName().compareTo(term) > 0) {
                min = mid;
                mid = (min + max) / 2;
            }
        }
        return -1;
    }
}
