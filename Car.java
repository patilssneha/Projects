public class Car {
    String name;
    String color;
    int speed;
    boolean isAvailable;

    Car(String n, String m, int s, boolean isAvailable) {
        name = n;
        color = m;
        speed = s;
        this.isAvailable = isAvailable;

    }

    void showAvailability() {
        if (isAvailable) {
            System.out.println(name + "is available.");

        } else {
            System.out.print(name + " is not available");
        }
    }

    void displayNamecolorAndspeed() {
        System.out.println("Car Name: " + name);
        System.out.println("Color: " + color);
        System.out.println("Speed: " + speed);
        System.out.println("Availability: " + (isAvailable ? "Yes" : "No"));
    }
}



