int basicOp(char op, int val1, int val2) {
  // Your code here
  if (op == '+') 
       return val1 + val2;
  else if (op == '-')
      return val1 - val2;
  else if (op == '*')
      return val1 * val2;
  else
      return val1 / val2;
}
