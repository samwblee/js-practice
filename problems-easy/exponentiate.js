// Challenge 9: Exponentiate
/*
Write a function exponentiate that accepts a number and a power to raise that number to. For the present, assume the power argument will always be a positive integer value.

Examples:
INPUT: exponentiate(2, 2);
OUTPUT: 4

INPUT: exponentiate(3, 4);
OUTPUT: 81
*/

// MY SOLUTION
function exponentiate(number, exponent)
{
  var total = 1;
  while(exponent>0)
  {
    total *= number;
    exponent--;
  }
  return total;
}

/* OFFICIAL SOLUTION
function exponentiate(number, exponent){
//return num**power;
  
  var result = 1;
  for(var i = 1; i <= power; i++){
    result*=num;
   }
  return result;
}
*/
