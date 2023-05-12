
public class Main {
    public static void main(String[] args) {
        PasswordManager.addUser("chase", "password");
        PasswordManager.addUser("tyler", "hello");
        PasswordManager.addUser("mr. s", "qwerty");
        boolean a = PasswordManager.authorizePassword("chase", "password");
        System.out.println(a);
    }
}
