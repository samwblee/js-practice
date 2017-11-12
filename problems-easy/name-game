// Challenge 26: Play Name Game
/*
Create a function, playNameGame that takes a person's first name (string) as an argument and will return a string of the name game song staring the name.

The best way to explain the name game is to see it in action, so study the examples below to learn the rules!

Examples:
console.log(playNameGame('Daniel'));
// OUTPUT: "Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel"

console.log(playNameGame('Ariel'));
// OUTPUT: "Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel"
*/




// MY SOLUTION

function playNameGame(name)
{
  var vowels = "aeiou"
  var append;
  
  if(vowels.indexOf(name[0].toLowerCase()) === 0)
  {
    append = name.toLowerCase();
  }
  else
  {
    append = name.slice(1);
  }
  return name + " " + name + " Bo B" + append + " Banana Fana Fo F" + append + " Fee Fi Mo M" + append + " " + name;
} 




/* OFFICIAL SOLUTION
function playNameGame(name) {
  var slicedName = name.toLowerCase();

  if('aeiou'.includes(slicedName[0])){
    slicedName = name[0].toLowerCase() + name.slice(1);
  } else {
    slicedName = name.slice(1);
  }
  return name + ' ' + name + ' ' + 'Bo B' + slicedName + ' Banana Fana Fo F' + slicedName + ' Fee Fi Mo M' + slicedName + ' ' + name;
} 
*/
