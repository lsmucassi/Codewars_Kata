function persistence(num) {
   //code me
   var count = 0; 
   function multiply(n) {
       return n.reduce(function(a,b) {
           return a * b
        });
   }
   
   while (num.toString().length > 1) {
       num = num.toString().split("")
       num = multiply(num)
       count++
    }
    return count
}
