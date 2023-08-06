/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 8681181
CaseNum: 802-2-13489281-8681181

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in winningHand from the deck and store it in the hand array.

- Write a function called winning_hand_set and call it from setup.
- The function should take each card in winningHand and seacrh for a match in cardDeck.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 10 and 90.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var cardDeck = [ { cardSuit: 'Spades', v: 'A'} , { cardSuit: 'Spades', v: '2'} , { cardSuit: 'Spades', v: '3'} , { cardSuit: 'Spades', v: '4'} , { cardSuit: 'Spades', v: '5'} , { cardSuit: 'Spades', v: '6'} , { cardSuit: 'Spades', v: '7'} , { cardSuit: 'Spades', v: '8'} , { cardSuit: 'Spades', v: '9'} , { cardSuit: 'Spades', v: '10'} , { cardSuit: 'Spades', v: 'J'} , { cardSuit: 'Spades', v: 'Q'} , { cardSuit: 'Spades', v: 'K'} , { cardSuit: 'Clubs', v: 'A'} , { cardSuit: 'Clubs', v: '2'} , { cardSuit: 'Clubs', v: '3'} , { cardSuit: 'Clubs', v: '4'} , { cardSuit: 'Clubs', v: '5'} , { cardSuit: 'Clubs', v: '6'} , { cardSuit: 'Clubs', v: '7'} , { cardSuit: 'Clubs', v: '8'} , { cardSuit: 'Clubs', v: '9'} , { cardSuit: 'Clubs', v: '10'} , { cardSuit: 'Clubs', v: 'J'} , { cardSuit: 'Clubs', v: 'Q'} , { cardSuit: 'Clubs', v: 'K'} , { cardSuit: 'Hearts', v: 'A'} , { cardSuit: 'Hearts', v: '2'} , { cardSuit: 'Hearts', v: '3'} , { cardSuit: 'Hearts', v: '4'} , { cardSuit: 'Hearts', v: '5'} , { cardSuit: 'Hearts', v: '6'} , { cardSuit: 'Hearts', v: '7'} , { cardSuit: 'Hearts', v: '8'} , { cardSuit: 'Hearts', v: '9'} , { cardSuit: 'Hearts', v: '10'} , { cardSuit: 'Hearts', v: 'J'} , { cardSuit: 'Hearts', v: 'Q'} , { cardSuit: 'Hearts', v: 'K'} , { cardSuit: 'Diamonds', v: 'A'} , { cardSuit: 'Diamonds', v: '2'} , { cardSuit: 'Diamonds', v: '3'} , { cardSuit: 'Diamonds', v: '4'} , { cardSuit: 'Diamonds', v: '5'} , { cardSuit: 'Diamonds', v: '6'} , { cardSuit: 'Diamonds', v: '7'} , { cardSuit: 'Diamonds', v: '8'} , { cardSuit: 'Diamonds', v: '9'} , { cardSuit: 'Diamonds', v: '10'} , { cardSuit: 'Diamonds', v: 'J'} , { cardSuit: 'Diamonds', v: 'Q'} , { cardSuit: 'Diamonds', v: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var winningHand = [ { s: 'Hearts', v: 'Q'} , { s: 'Clubs', v: 'Q'} , { s: 'Diamonds', v: 'K'} , { s: 'Clubs', v: '10'} , { s: 'Diamonds', v: '10'}  ];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleSeed();
	shuffleDeck(shuffleSeed);
	//call your winning_hand_set function here
	winning_hand_set();
}

//write your winning_hand_set function here
function winning_hand_set(){
	for(var i = 0; i < winningHand.length; i++){
		for( var j =0 ; j < cardDeck.length; j++){
			if (winningHand[i].s == cardDeck[j].cardSuit && winningHand[i].v == cardDeck[j].v){
				hand.push(cardDeck[j]);
				break;
			}
		}
	}

}
//write your shuffleSeed() function here.
function shuffleSeed(){
	var shuffleArray = [];
 for(var i = 0; i < 52; i++){

	let randomInt = round(random(10,90));
	shuffleArray.push(randomInt);
  }
  return shuffleArray;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < cardDeck.length; j++)
	   {
		  var tempCard = cardDeck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          cardDeck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.v == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
