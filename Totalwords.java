public class Totalwords {
    public static void main(String[] args) {
        String s1 = "Here is my java program";
        String[] words = s1.trim().split("\\s+");
        System.out.println("Total words: " + words.length);
    }
    
}
