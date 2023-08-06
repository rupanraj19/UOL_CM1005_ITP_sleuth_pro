/*

Officer: 8681181
CaseNum: 701-2-42151786-8681181

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from jesus pegord. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They had long white hair. They were fairly tall, I think between a height of 149 and 200 cm. It was so scary! They wore thin metallic glasses. It's so hard to remember right now. I'll never forget their black eyes. They were wearing a green jacket. I distinctly remember that they were wearing a net weave shirt, I remember thinking that was quite unusual. They brobably weigh between 69 and 87 kg. They seemed to be between the age of 28 and 56 years old. Can I go home now Sir? 

*/

var suspectList = [
	{ 
		"name": "RANDEE MONKSFORD",
		"eyes": "pale",
		"hair": "dark brown",
		"coat": "green army coat",
		"glasses": "red",
		"height": 170,
		"age": 42,
		"weight": 72
	},
	{ 
		"name": "JENIFFER PHINNEY",
		"eyes": "green",
		"hair": "red",
		"coat": "white fur coat",
		"glasses": "blue",
		"height": 173,
		"age": 45,
		"weight": 72
	},
	{ 
		"name": "KITTY JENI",
		"eyes": "black",
		"hair": "long white",
		"coat": "green jacket",
		"glasses": "thin metallic",
		"height": 176,
		"age": 51,
		"weight": 84
	},
	{ 
		"name": "GAYLA JOYER",
		"eyes": "grey",
		"hair": "short black",
		"coat": "yellow poncho",
		"glasses": "very thin",
		"height": 176,
		"age": 26,
		"weight": 69
	},
	{ 
		"name": "BRAD CROME",
		"eyes": "grey",
		"hair": "thick black",
		"coat": "black hoodie",
		"glasses": "dark brown",
		"height": 180,
		"age": 41,
		"weight": 69
	},
	{ 
		"name": "DRUSILLA WARMAN",
		"eyes": "pale",
		"hair": "white",
		"coat": "blue overcoat",
		"glasses": "very thick",
		"height": 188,
		"age": 41,
		"weight": 75
	},
	{ 
		"name": "HANG DEAUVILLE",
		"eyes": "blue",
		"hair": "shaved",
		"coat": "red parka",
		"glasses": "white",
		"height": 174,
		"age": 48,
		"weight": 70
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
function matchProperties(suspectObj) {
  // Initialize a counter variable to 0
  let counter = 0;

  // Check if the suspect's eyes match the witness statement
  if (suspectObj.eyes === "black") {
    counter++;
  }

  // Check if the suspect's hair matches the witness statement
  if (suspectObj.hair === "long white") {
    counter++;
  }

  // Check if the suspect's coat matches the witness statement
  if (suspectObj.coat === "green jacket") {
    counter++;
  }

  // Check if the suspect's glasses match the witness statement
  if (suspectObj.glasses === "thin metallic") {
    counter++;
  }

  // Check if the suspect's height is within the range specified in the witness statement
  if (suspectObj.height >= 149 && suspectObj.height <= 200) {
    counter++;
  }

  // Check if the suspect's age is within the range specified in the witness statement
  if (suspectObj.age >= 28 && suspectObj.age <= 56) {
    counter++;
  }

  // Check if the suspect's weight is within the range specified in the witness statement
  if (suspectObj.weight >= 69 && suspectObj.weight <= 87) {
    counter++;
  }

  // Return the counter variable
  return counter;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    let matchingProperties = matchProperties(suspectList[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectList[i].name, 60, 60 + i * 20);
  }
}
