function positiveSum(arr) {
   var sum = 0
   for (var i =0; i < arr.length; i++) {
     (arr[i] > 0) ? sum += arr[i] : sum += 0
   }
   return sum
}
