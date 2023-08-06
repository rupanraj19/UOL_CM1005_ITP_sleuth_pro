/*
801
Stage 4: The Marriage of Figaro

Officer: 8681181
CaseNum: 801-3-72184784-8681181

One last chance to record the Cooley gang before the curtain comes down on the Marriage of Figaro. They might be the most influential group in console city but they still have their quirks and will be spotable thanks their trademark monicle.

Our guy on the inside has only been able to provide us with the ticket stubs, they are in order and marked with true if they are in the gang. It’ll be tough but I’m sure you are up to it kid!

You’ll want to set the highlighted property of the house array to true when the equivalent element of the gangMember is also true.

Complete the case using
For
house[ ][ ]
You can create an additional variable if it helps.


*/

var crowdImg;
var spotlight;

var house = [[{"x":50,"y":50,"highlighted":false},{"x":150,"y":50,"highlighted":false},{"x":250,"y":50,"highlighted":false},{"x":350,"y":50,"highlighted":false},{"x":450,"y":50,"highlighted":false},{"x":550,"y":50,"highlighted":false},{"x":650,"y":50,"highlighted":false},{"x":750,"y":50,"highlighted":false},{"x":850,"y":50,"highlighted":false},{"x":950,"y":50,"highlighted":false}],[{"x":50,"y":130,"highlighted":false},{"x":150,"y":130,"highlighted":false},{"x":250,"y":130,"highlighted":false},{"x":350,"y":130,"highlighted":false},{"x":450,"y":130,"highlighted":false},{"x":550,"y":130,"highlighted":false},{"x":650,"y":130,"highlighted":false},{"x":750,"y":130,"highlighted":false},{"x":850,"y":130,"highlighted":false},{"x":950,"y":130,"highlighted":false}],[{"x":50,"y":210,"highlighted":false},{"x":150,"y":210,"highlighted":false},{"x":250,"y":210,"highlighted":false},{"x":350,"y":210,"highlighted":false},{"x":450,"y":210,"highlighted":false},{"x":550,"y":210,"highlighted":false},{"x":650,"y":210,"highlighted":false},{"x":750,"y":210,"highlighted":false},{"x":850,"y":210,"highlighted":false},{"x":950,"y":210,"highlighted":false}],[{"x":50,"y":290,"highlighted":false},{"x":150,"y":290,"highlighted":false},{"x":250,"y":290,"highlighted":false},{"x":350,"y":290,"highlighted":false},{"x":450,"y":290,"highlighted":false},{"x":550,"y":290,"highlighted":false},{"x":650,"y":290,"highlighted":false},{"x":750,"y":290,"highlighted":false},{"x":850,"y":290,"highlighted":false},{"x":950,"y":290,"highlighted":false}],[{"x":50,"y":370,"highlighted":false},{"x":150,"y":370,"highlighted":false},{"x":250,"y":370,"highlighted":false},{"x":350,"y":370,"highlighted":false},{"x":450,"y":370,"highlighted":false},{"x":550,"y":370,"highlighted":false},{"x":650,"y":370,"highlighted":false},{"x":750,"y":370,"highlighted":false},{"x":850,"y":370,"highlighted":false},{"x":950,"y":370,"highlighted":false}],[{"x":50,"y":450,"highlighted":false},{"x":150,"y":450,"highlighted":false},{"x":250,"y":450,"highlighted":false},{"x":350,"y":450,"highlighted":false},{"x":450,"y":450,"highlighted":false},{"x":550,"y":450,"highlighted":false},{"x":650,"y":450,"highlighted":false},{"x":750,"y":450,"highlighted":false},{"x":850,"y":450,"highlighted":false},{"x":950,"y":450,"highlighted":false}],[{"x":50,"y":530,"highlighted":false},{"x":150,"y":530,"highlighted":false},{"x":250,"y":530,"highlighted":false},{"x":350,"y":530,"highlighted":false},{"x":450,"y":530,"highlighted":false},{"x":550,"y":530,"highlighted":false},{"x":650,"y":530,"highlighted":false},{"x":750,"y":530,"highlighted":false},{"x":850,"y":530,"highlighted":false},{"x":950,"y":530,"highlighted":false}],[{"x":50,"y":610,"highlighted":false},{"x":150,"y":610,"highlighted":false},{"x":250,"y":610,"highlighted":false},{"x":350,"y":610,"highlighted":false},{"x":450,"y":610,"highlighted":false},{"x":550,"y":610,"highlighted":false},{"x":650,"y":610,"highlighted":false},{"x":750,"y":610,"highlighted":false},{"x":850,"y":610,"highlighted":false},{"x":950,"y":610,"highlighted":false}],[{"x":50,"y":690,"highlighted":false},{"x":150,"y":690,"highlighted":false},{"x":250,"y":690,"highlighted":false},{"x":350,"y":690,"highlighted":false},{"x":450,"y":690,"highlighted":false},{"x":550,"y":690,"highlighted":false},{"x":650,"y":690,"highlighted":false},{"x":750,"y":690,"highlighted":false},{"x":850,"y":690,"highlighted":false},{"x":950,"y":690,"highlighted":false}],[{"x":50,"y":770,"highlighted":false},{"x":150,"y":770,"highlighted":false},{"x":250,"y":770,"highlighted":false},{"x":350,"y":770,"highlighted":false},{"x":450,"y":770,"highlighted":false},{"x":550,"y":770,"highlighted":false},{"x":650,"y":770,"highlighted":false},{"x":750,"y":770,"highlighted":false},{"x":850,"y":770,"highlighted":false},{"x":950,"y":770,"highlighted":false}]];
var gangMember = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////
	var index = 0;
	for(var i = 0 ; i < house.length; i++){
		for(var j = 0; j < gangMember.length; j++){
			if(gangMember[index] == true){
				house[i][j].highlighted = true;
			};
			
		}
		
	}


	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < house.length; i++)
	{
		for (var j = 0; j < house[i].length; j++)
		{
			if (house[i][j].highlighted)
			{
				image(spotlight, house[i][j].x, house[i][j].y, 100 , 100 );
			}
		}
	}
}
