// Challenge 10: Factorial
/*
Create the function factorial(num) that returns the factorial of its argument. The argument, num, will be a positive whole number.

A factorial is the product of a number times all the numbers below it and is denoted by a '!'. For example, 5! would be 5*4*3*2*1 or 120.

If you'd like additional information about factorials, check out for a refresher!

Example:
INPUT: factorial(4);
OUTPUT: 24

INPUT: factorial(5);
OUTPUT: 120
*/

// MY SOLUTION
function factorial(num)
{
  if (num === 0)
  {
    return 1;
  }
  for(var i = num-1; i > 0; i--)
  {
    num *= i;
  }
  return num;
}

/* OFFICIAL SOLUTION
function factorial(n){
	if(n===0){
	  return 1;
	}
	
	for(var i = (n-1); i >= 1; i--){
	  n = n * i;
	}
	return n;
}
*/
