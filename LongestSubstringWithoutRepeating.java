import java.util.HashSet;

public class LongestSubstringWithoutRepeating {
    public static void main(String[] args) {
        LongestSubstringWithoutRepeating k=new LongestSubstringWithoutRepeating();
        System.out.println(k.LongestSubstring("abcdabcbb"));
    }
    public int LongestSubstring(String substring){
         HashSet<Character>values=new HashSet<>();
         int start=0;
         int end=0;
         int maxlen=0;
         while( end < substring.length()){
             if (!values.contains(substring.charAt(end))) {
                 values.add(substring.charAt(end));
                 maxlen=Math.max(maxlen,end-start);
                 end++;
             }
             else{
                 values.remove(substring.charAt(start));
                 start++;
             }
         }
         return maxlen+1;
    }
}
