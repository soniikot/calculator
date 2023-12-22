const add = function(a,b) {
    const result= a+b;
      return result
  };
  
  const subtract = function(a,b) {
      const result= a-b;
      return result
  };
  
  const sum = function(arr) {
      const result =arr.reduce((a,b) => a+b,0);
      return result
  };
  
  const multiply = function(arr) {
    const result =arr.reduce((a,b) => a*b);
      return result
  };
  
  const power = function(a,b) {
      const result= a**b;
      return result
  };
  
  const factorial = function(num) {
    if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
  }
  