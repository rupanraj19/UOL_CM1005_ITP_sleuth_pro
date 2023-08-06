/*

Officer: 8681181
CaseNum: 701-1-96633897-8681181

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I remember they had a big arrow tattoo. Their expression seemed angry. The person I saw was female. They were carrying a metal briefcase. By the look of them they were younger than 70. It's hard to say. I think they were more than 160 cm tall. It's hard to say. I hope I never have to go through that again. 

*/

var suspectsArray = [
	{ 
		"name": "HANG MOHWAWK",
		"expression": "angry",
		"accessory": "metal briefcase",
		"gender": "female",
		"age": 63,
		"height": 165
	},
	{ 
		"name": "LESLEY THAXTER",
		"expression": "blank",
		"accessory": "red backpack",
		"gender": "male",
		"age": 62,
		"height": 150
	},
	{ 
		"name": "LAVERNE CASIMERE",
		"expression": "nerveous",
		"accessory": "big black envelope",
		"gender": "female",
		"age": 34,
		"height": 175
	},
	{ 
		"name": "JACQUELINE WILLMAR",
		"expression": "empty",
		"accessory": "glass bottle",
		"gender": "female",
		"age": 58,
		"height": 182
	},
	{ 
		"name": "KITTY MONKSFORD",
		"expression": "nerveous",
		"accessory": "orange plastic bag",
		"gender": "male",
		"age": 43,
		"height": 171
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
function matchSuspect(suspectObj){
	// I remember walking down the street and then I saw them.
	//  I remember they had a big arrow tattoo. Their expression seemed angry.
	//   The person I saw was female. They were carrying a metal briefcase. 
	//   By the look of them they were younger than 70. It's hard to say.
	//   I think they were more than 160 cm tall.
	//  It's hard to say. I hope I never have to go through that again. 

	if(suspectObj.expression == "angry" && suspectObj.gender == "female" &&
	 suspectObj.accessory == "metal briefcase" && suspectObj.age < 70 && suspectObj.height > 160){
		return true
	}
	return false
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    if(matchSuspect(suspectsArray[i]) == true){
      fill(255,0,0);
      text(suspectsArray[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsArray[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
