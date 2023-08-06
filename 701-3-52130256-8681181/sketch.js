/*

Officer: 8681181
CaseNum: 701-3-52130256-8681181

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from hang phinney.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchSuspectosuspectObj function that takes a suspectObj object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspectObj's properties to the statement.

- A traverseSuspectosuspectObjs function which traverses the array of suspectObjs and returns the object representing the guilty suspectObj,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspectosuspectObj(suspectObjObj){}
 - function traverseSuspectosuspectObjs(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It's so hard to remember right now. I'm not quite sure. They brobably weigh between 62 and 100 kg. They were fairly tall, I think between a height of 152 and 188 cm. I remember they had a anchor tattoo. They were wearing a green army coat. It's so hard to remember right now. Their expression seemed confused. I distinctly remember that they were wearing a orange socks, I remember thinking that was quite unusual. They seemed to be between the age of 25 and 41 years old. The person I saw was female. They had white hair. That's all I know officer. 

*/

var lineupLog = [
	{ 
		"name": "JENIFFER ZETLAND",
		"gender": "male",
		"expression": "blank",
		"item": "purple hat",
		"coat": "red parka",
		"age": 36,
		"height": 164,
		"weight": 80
	},
	{ 
		"name": "DRUSILLA DORCEY",
		"gender": "female",
		"expression": "depressed",
		"item": "dotted necktie",
		"coat": "white fur coat",
		"age": 44,
		"height": 183,
		"weight": 72
	},
	{ 
		"name": "MAJORIE ASHELY",
		"gender": "male",
		"expression": "menacing",
		"item": "net weave shirt",
		"coat": "black overcoat",
		"age": 54,
		"height": 189,
		"weight": 72
	},
	{ 
		"name": "DARBY CROME",
		"gender": "female",
		"expression": "angry",
		"item": "pair of leather trousers",
		"coat": "yellow poncho",
		"age": 30,
		"height": 190,
		"weight": 85
	},
	{ 
		"name": "BRIDGET JENI",
		"gender": "male",
		"expression": "nerveous",
		"item": "pink scarf",
		"coat": "blue overcoat",
		"age": 42,
		"height": 183,
		"weight": 84
	},
	{ 
		"name": "DEEDEE SYMMES",
		"gender": "female",
		"expression": "confused",
		"item": "orange socks",
		"coat": "green army coat",
		"age": 39,
		"height": 154,
		"weight": 80
	},
	{ 
		"name": "RANDEE DAVISWOOD",
		"gender": "female",
		"expression": "empty",
		"item": "fur vest",
		"coat": "black hoodie",
		"age": 46,
		"height": 162,
		"weight": 78
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

// Declare both your functions here
function matchSuspect(suspectObj) {
	// Initialize a counter variable to 0
	let counter = 0;
  
	// Check if the suspectObj's expression matches the witness statement
	if (suspectObj.expression === "confused") {
	  counter++;
	}
  
	// Check if the suspectObj's item matches the witness statement
	if (suspectObj.item === "orange socks") {
	  counter++;
	}
  
	// Check if the suspectObj's coat matches the witness statement
	if (suspectObj.coat === "green army coat") {
	  counter++;
	}
  
	// Check if the suspectObj's gender matches the witness statement
	if (suspectObj.gender === "female") {
	  counter++;
	}
  
	// Check if the suspectObj's height is within the range specified in the witness statement
	if (suspectObj.height >= 152 && suspectObj.height <= 188) {
	  counter++;
	}
  
	// Check if the suspectObj's age is within the range specified in the witness statement
	if (suspectObj.age >= 25 && suspectObj.age <= 41) {
	  counter++;
	}
  
	// Check if the suspectObj's weight is within the range specified in the witness statement
	if (suspectObj.weight >= 62 && suspectObj.weight <= 100) {
	  counter++;
	}
  
	// Return the number of matches
	return counter;
	// console.log(counter);
  }

function traverseSuspects() {
	
	for (let i = 0; i < lineupLog.length; i++) {
	 
	  let suspectObj = lineupLog[i];
	  
  
	  let matches = matchSuspect(suspectObj);
  
	  if (matches > 5) {

		return suspectObj;
	  }
	}
  
  }
// let guiltySuspect = traverseSuspects();
// console.log(guiltySuspect);

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
