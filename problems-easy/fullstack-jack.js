// Challenge 15: Fullstack-Jack
/*
Write a function called fullstackJack to figure out who will going to win a game of Black Jack.

The function should take two arrays of equal length containing the cards each player is dealt. The function should return a string saying 'Player 1 Wins!', 'Player 2 Wins!', or 'Tie!'.

FullstackJack Rules:

Each player is dealt the same number of cards
They flip the card at the top of the deck
The card with the highest value wins the round, ​and the winning player receives a point
If the cards are the same, both players get a point
The two cards used are discarded
The players continue playing until there are no remaining cards
The player with the most points at the end wins
EXAMPLE:

Representing Cards:

A players hand is stored in an array. Each index is a card value. The card rank is as follows (from lowest to highest):'2','3','4','5','6','7','8','9','T','J','Q','K','A'. Player hands are passed to the fullstackJack function as arguments, as in the examples below:

player1Hand = ['A', '7', '8'];
player2Hand = ['K', '5', '9'];
INPUT: fullstackJack(['A', '7', '8'], ['K', '5', '9']);
OUTPUT: 'Player 1 Wins!'
Explanation:

Player1 is dealt ['A','7','8']
Player2 is dealt ['K','5','9']
In first round, Ace beats King and Player1 gets one point.
In second round, 7 beats 5 and Player1 gets his second point.
In third round, 9 beats 8 and Player2 gets one point.
You should return 'Player1 wins!'.
INPUT: fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J']);
OUTPUT: 'Tie!'
*/



// MY SOLUTION

function fullstackJack(hand1, hand2){
  var cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  var score1 = 0;
  var score2 = 0;
  var p1 = "";
  var p2 = "";
  
  while(hand2.length>0){
    //played cards (discard when played)
    p1 = hand1.shift();
    p2 = hand2.shift();
    //scoring played cards
    if(cards.indexOf(p1) > cards.indexOf(p2)){
      score1++;
    }else if(cards.indexOf(p1) < cards.indexOf(p2)){
      score2++;
    }
  }
// Final score and winner
  if(score1===score2){
    return "Tie!";
  }else if (score1>score2){
    return "Player 1 wins " + score1 + " to " + score2 + "!";
  }else{
    return "Player 2 wins " + score2 + " to " + score1 + "!";
  }
}


/* OFFICIAL SOLUTION
function fullstackJack(playerOne, playerTwo) {
  var rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  var playerOneScore = 0;
  var playerTwoScore  = 0;
  var msg;

  
  for (var card_idx = 0; card_idx < playerOne.length; card_idx++) {
  
    if (rank.indexOf(playerOne[card_idx]) > rank.indexOf(playerTwo[card_idx])) {
      playerOneScore++;
    } else if (rank.indexOf(playerOne[card_idx]) < rank.indexOf(playerTwo[card_idx])) {
        playerTwoScore++;      
    }
    
  }
  
  if (playerOneScore > playerTwoScore) {
    msg = 'Player 1 Wins!';
  } else if (playerOneScore < playerTwoScore) {
    msg = 'Player 2 Wins!';
  } else {
    msg = 'Tie!';
  }
  
  return msg;
}
*/
