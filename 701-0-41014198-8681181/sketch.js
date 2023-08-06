/*

Officer: 8681181
CaseNum: 701-0-41014198-8681181

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist pierre ashely and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. The person I saw was male. It was very dark and I could barely see, I remember they had a dark black tattoo. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. It was very dark and I could barely see, That's all I know officer. 

*/

var usualSuspects = [
	{ 
		"name": "JESUS COURTWOOD",
		"item": "red necktie",
		"gender": "male",
		"tattoo": "dark black"
	},
	{ 
		"name": "LIANNE GOODBURY",
		"item": "dotted necktie",
		"gender": "male",
		"tattoo": "ox"
	},
	{ 
		"name": "JAUNITA MONKSFORD",
		"item": "pair of leather trousers",
		"gender": "female",
		"tattoo": "facial"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here

function checkSuspect(suspectObj){
	if(suspectObj.gender == "male" && suspectObj.tattoo == "dark black" &&suspectObj.item == "red necktie"){
		return true
	}
	return false
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(checkSuspect(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
