// Challenge 20: Count by M
/*
Write a function that takes three arguments: n (number), m(number) and direction (string). The function should count to n by intervals of m and return those numbers in an array.

If the direction string is "Up", the function should count up to n from but not including 0. If the string is "Down", it should count down to but not including 0. You can assume that both n and m will be greater than 0.

Examples:

console.log(count(10, 2, "Up"));
// OUTPUT: [2, 4, 6, 8, 10]

console.log(count(11, 2, "Down"));
// OUTPUT: [11, 9, 7, 5, 3, 1]
*/

// MY SOLUTION
function count(n, m, direction)
{
  var arr = [];
  var num;
  
  if(direction === "Down")
  {
    num = n;
    while(num > 0)
    {
      arr.push(num);
      num -= m;
    }
  }
  else
  {
    num = 0;
    
    while(num < n)
    {
      num += m;
      arr.push(num);
    }
  }
  
  return arr;
}

/* OFFICIAL SOLUTION
function count (to, interval, direction) {
 var intervalsArr = [];
 
 if(direction === 'Up') {
    for(var up = 0; up <= to; up+=interval) {
     if(up !== 0) intervalsArr.push(up);  
    }
  } else {
    for(var down = to; down >= 0; down-=interval) {
     if(down !== 0) intervalsArr.push(down);
    }
  }
 return intervalsArr;
}
*/
