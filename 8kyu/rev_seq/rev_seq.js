const reverseSeq = n => {
  var seq = []
  for(var x = 0; n > 0; x++) {
    seq[x] = n + 1 - 1
    n--
    }
  return seq;
};
