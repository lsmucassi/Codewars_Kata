function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var av = 0
  var i
  for (i = 0; i < classPoints.length; i++) { 
    av += classPoints[i]
   }
   av = av / classPoints.length
   
   return ((av < yourPoints) ? true : false)
}
