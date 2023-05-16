public class User {
    String name;
    String password;
    public User(String name, String password){
        this.name = name;
        this.password = password;
    }
    
    public String getName() {
        return name;
    }public String getPassword() {
        return password;
    }public void setName(String name) {
        this.name = name;
    }public void setScore(String password) {
        this.password = password;
    }

    public String toString() {
        return "user: " + getName() + " | password: " + getPassword();
    }
}
