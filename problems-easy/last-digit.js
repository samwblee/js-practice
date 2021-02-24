// Challenge 6: Last Digit
/*
Create the function lastDigit that accepts two non-negative integer values and returns true if they have the same last digit, such as 27 and 57.

The function accepts two non-negative integer arguments and returns true or false if they have the same last digit.

Examples:
INPUT: lastDigit(22,32); OUTPUT: true

INPUT: lastDigit(77, 999); OUTPUT: false

INPUT: lastDigit(33,3); OUTPUT: true
*/

// MY SOLUTION
function lastDigit(num1, num2)
{
  if(num1.toString().slice(-1) === num2.toString().slice(-1))
  {
    return true;
  }
  return false;
}

/* OFFICIAL SOLUTION
function lastDigit(num1, num2){
	num1 = num1.toString();
	num2 = num2.toString();

	if(num1[num1.length-1] === num2[num2.length-1]){
		return true;
	} else {
		return false;
	}
}
*/
