// How Equal?
/*
Write a function that compares two values and returns "how equal" those two values are. If they are strictly equal return "strictly", if they are loosely equal return "loosely", and if they are neither return "not equal".

Note: Study the examples below. Due to type coercion, you may not always get the result you expect!

Examples:

INPUT: howEqual(0,'0')
OUTPUT: 'loosely'

INPUT: howEqual(3, 9/3)
OUTPUT: 'strictly'

INPUT: howEqual(true, 'truthy')
OUTPUT: 'not equal'

INPUT: howEqual(false,'0')
OUTPUT: 'loosely'

INPUT: howEqual(0,'')
OUTPUT: 'loosely'
*/

// MY SOLUTION
function howEqual(x, y)
{
  if(x === y)
  {
    return "strictly";
  }
  else if(x == y)
  {
    return "loosely";
  }
  return "not equal";
} 

/* OFFICIAL SOLUTION
function howEqual(m, n) {
  if (m === n) {
    return 'strictly';
  } else if (m == n) {
    return 'loosely';
  } else {
    return 'not equal';
  }
}
*/
