import java.util.*;

public class Solution {
    public boolean checkThreeAndTwo(char[] chars) {
      boolean yes = false;
      int a = 0, b = a, c = b;
      
       for (int i = 0; i < chars.length; i++) {
          if (chars[i] == 'a')
            a += 1;
          if (chars[i] == 'b')
            b += 1;
          if (chars[i] == 'c')
            c += 1;
       }
        
       if ((a == 3 || b == 3 || c == 3) && (a == 2 || b == 2 || c == 2))
          yes = true;
   
       return yes;
    }
}
