// Challenge 3: Ask Politely
/*
Create the function askPolitely that accepts a sentence as an argument.

If the last character of the sentence is a question mark, the question should end with the word "please?". If a question is already polite (meaning it already ends with "please") OR the sentence is not a question, return string argument without modification.

Examples:

The string argument is a question without please:

INPUT: askPolitely("May I borrow your pencil?");
OUTPUT: "May I borrow your pencil please?"
The string argument is a question and already has please?. (do not modify the string)

INPUT: askPolitely("May I ask a question please?");
OUTPUT: "May I ask a question please?"
The string argument is not a question (do not modify the string)

INPUT: askPolitely("My name is Grace Hopper.");
OUTPUT: "My name is Grace Hopper.";
*/

// MY SOLUTION
function askPolitely(str)
{
  // To account for "please" not being the last word, but still present
  if(str.indexOf("?")>0 && str.toLowerCase().indexOf("please")<0)
  {
    str = str[0].toUpperCase() + str.slice(1, -1) + " please?";
  }
  return str;
}

/* OFFICIAL SOLUTION

function askPolitely(sentence){
	if(sentence.slice(-1) === '?'){
		if(sentence.slice(-7) === 'please?'){
			return sentence;
			} else {
				return sentence.slice(0,-1) + ' please?';	
			}
	} else {
		return sentence;
	}
}

// or

function askPolitely (sentence) {
  if (sentence[sentence.length -1] === '?' && sentence.slice(-7) !== 'please?') {
    return sentence.slice(0, -1) + " please?"
  } else {
    return sentence
  }
}
*/
