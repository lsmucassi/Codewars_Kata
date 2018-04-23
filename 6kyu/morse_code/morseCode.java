public class MorseCodeDecoder {
    public static String decode(String morseCode) {
        // your brilliant code here,
        // remember that you can access
        // the preloaded Morse code table through MorseCode.get(code)
        
        String word = "";
        morseCode = morseCode.trim().replace("   ", " ! ");
        String decMors[] = morseCode.split(" ");
        
        for (String temp: decMors){
          word += (MorseCode.get(temp) != null) ? MorseCode.get(temp) : " ";
        }
        return word;
    }
}
