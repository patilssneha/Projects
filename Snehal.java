public class Snehal {
    public static void main(String[] arg) {

        String str = "JavaAE";
        String str2 = str.toLowerCase(); // javavaae
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count += 1;
            }

        }
        System.out.println("Number of vowels:" + count);
    }
}
