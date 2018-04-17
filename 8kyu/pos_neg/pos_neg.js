function countPositivesSumNegatives(input) {
    var i = 0, neg = 0, cps = [0,0]

    if (input == null || input.length < 1){
      return [];
    }
    else {
      while (i < input.length) {
          (input[i] > 0) ? cps[0] += 1 :  neg += input[i]
          i++
      }
      cps[1] = neg
      return cps;
    }
}
