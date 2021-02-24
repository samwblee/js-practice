// Challenge 2: Greeting
/* 
Create a function greeting(name) that accepts a string argument (a name, ex: "Oliver"), and returns a personalized greeting if a name is present.
The function takes a name as its only argument and returns a string. Check the Example and Test Specs tabs to learn more about the function.

Examples:
- INPUT: greeting('Charlotte');
- OUTPUT: "Hello, Charlotte!";

- INPUT: greeting();
- OUTPUT: "Hello!";
*/

// MY SOLUTION
function greeting(name)
{
  if(name)
  {
    return "Hello, " + name + "!";
  }
  else
  {
    return "Hello!";
  }
}

/* OFFICIAL SOLUTION
function greeting(name){
  if(name){
	  return "Hello, " + name + "!";
	 } else {
		return "Hello!";
	}
}
*/
