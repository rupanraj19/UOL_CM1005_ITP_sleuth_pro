/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 8681181
CaseNum: 802-1-23731177-8681181

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

- Write a function called fill_shuffle_array.
- Declare an empty array in the function.
- Using a for loop, fill the array with 52 random integers between 8 and 70.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- At the end of the function, return the array 
- Call fill_shuffle_array in setup.
- Call Shuffle deck using the return value from fill_shuffle_array as the argument.

*/

var cardDeck = [ { suit: 'Spades', n: 'A'} , { suit: 'Spades', n: '2'} , { suit: 'Spades', n: '3'} , { suit: 'Spades', n: '4'} , { suit: 'Spades', n: '5'} , { suit: 'Spades', n: '6'} , { suit: 'Spades', n: '7'} , { suit: 'Spades', n: '8'} , { suit: 'Spades', n: '9'} , { suit: 'Spades', n: '10'} , { suit: 'Spades', n: 'J'} , { suit: 'Spades', n: 'Q'} , { suit: 'Spades', n: 'K'} , { suit: 'Clubs', n: 'A'} , { suit: 'Clubs', n: '2'} , { suit: 'Clubs', n: '3'} , { suit: 'Clubs', n: '4'} , { suit: 'Clubs', n: '5'} , { suit: 'Clubs', n: '6'} , { suit: 'Clubs', n: '7'} , { suit: 'Clubs', n: '8'} , { suit: 'Clubs', n: '9'} , { suit: 'Clubs', n: '10'} , { suit: 'Clubs', n: 'J'} , { suit: 'Clubs', n: 'Q'} , { suit: 'Clubs', n: 'K'} , { suit: 'Hearts', n: 'A'} , { suit: 'Hearts', n: '2'} , { suit: 'Hearts', n: '3'} , { suit: 'Hearts', n: '4'} , { suit: 'Hearts', n: '5'} , { suit: 'Hearts', n: '6'} , { suit: 'Hearts', n: '7'} , { suit: 'Hearts', n: '8'} , { suit: 'Hearts', n: '9'} , { suit: 'Hearts', n: '10'} , { suit: 'Hearts', n: 'J'} , { suit: 'Hearts', n: 'Q'} , { suit: 'Hearts', n: 'K'} , { suit: 'Diamonds', n: 'A'} , { suit: 'Diamonds', n: '2'} , { suit: 'Diamonds', n: '3'} , { suit: 'Diamonds', n: '4'} , { suit: 'Diamonds', n: '5'} , { suit: 'Diamonds', n: '6'} , { suit: 'Diamonds', n: '7'} , { suit: 'Diamonds', n: '8'} , { suit: 'Diamonds', n: '9'} , { suit: 'Diamonds', n: '10'} , { suit: 'Diamonds', n: 'J'} , { suit: 'Diamonds', n: 'Q'} , { suit: 'Diamonds', n: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your fill_shuffle_array function here. Followed by a call to shuffleDeck with the return value of fill_shuffle_array as an argument.
	fill_shuffle_array();
	shuffleDeck(fill_shuffle_array);
}

//write your fill_shuffle_array function here
function fill_shuffle_array(){
	var shuffle_array = [];

	for(var i =0; i < 52; i++ ){
		let randomInt = round(random(8, 70));
		shuffle_array.push(randomInt);
	}
	return shuffle_array;
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
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (cardDeck[i].marked)
		{
			drawCard(cardDeck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(cardDeck[i], 400 + i * 18, 250);
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
			if (card.n == values[j] && card.suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
