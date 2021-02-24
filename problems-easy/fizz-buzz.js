// Challenge 23: FizzBuzz
/*
Write the function fizzBuzz, a modified version of the classic programming problem.

The function takes a number for its input.

If the number is divisible by 3, it should return 'Fizz'.
If the number is divisible by 5, it should return 'Buzz' and if the number is divisible by 15, return 'FizzBuzz'.
If the number isn't divisible by 5, 3, or 15, return an empty string.
Examples:
console.log(fizzBuzz(6));
//OUTPUT: 'Fizz'

console.log(fizzBuzz(10));
//OUTPUT: 'Buzz'

console.log(fizzBuzz(15));
//OUTPUT:  'FizzBuzz'

console.log(fizzBuzz(7));
//OUTPUT: ''
*/

// MY SOLUTION
function fizzBuzz(num)
{
  if(num % 15 === 0)
  {
    return "FizzBuzz";
  }
  else if(num % 5 === 0)
  {
    return "Buzz";
  }
  else if(num % 3 ===0)
  {
    return "Fizz";
  }
  return "";
}

/* OFFICIAL SOLUTION
function fizzBuzz(num) {
  if (num%15 === 0) {
    return 'FizzBuzz';
  } else if (num%5 === 0) {
    return 'Buzz';
  } else if (num%3 === 0) {
    return 'Fizz';
  } else {
    return '';
  }
}
*/
