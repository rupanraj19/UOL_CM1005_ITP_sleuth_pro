/*

Officer: 8681181
CaseNum: 502-2-69936376-8681181

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var CensoredA = {
	Element0: [ "fence", "Governor Zuckerberg", "plug"], 
	Element1: [ "succeed", "start", "rejoice"], 
	Element2: [ "consider", "sail", "hurry"], 
	Element3: [ "protect", "hurry", "sneeze"], 
	Element4: [ "fence", "Edsger", "radiate"], 
	Element5: [ "$200,000", "clip", "Hopper"], 
	Element6: [ "play", "bake", "smile"], 
	Element7: [ "rejoice", "rejoice", "smile"], 
	Element8: [ "smile", "sail", "sneeze"], 
	Element9: [ "meddle", "consider", "play"]
};

var CensoredB = {
	Element0: [ "sail", "play", "ALGOL"], 
	Element1: [ "consider", "stuff", "bake"], 
	Element2: [ "campaign", "succeed", "a donation"], 
	Element3: [ "protect", "mend", "plug"], 
	Element4: [ "plug", "hit", "hurry"], 
	Element5: [ "rejoice", "succeed", "charge"], 
	Element6: [ "plug", "start", "sail"], 
	Element7: [ "rejoice", "play", "sneeze"], 
	Element8: [ "syndicate", "smile", "succeed"], 
	Element9: [ "start", "smile", "mend"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "Dear "+CensoredA.Element0[1]+", I am sure that something could be worked out in terms of "+CensoredB.Element2[2]+" for your "+CensoredB.Element2[0]+". How does "+CensoredA.Element5[0]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " +CensoredA.Element5[2]+" needs to be out of the picture. She’s caused enough trouble. Get the "+CensoredB.Element8[0]+" to organise the "+CensoredB.Element4[1]+" but I’d prefer it you don’t mention me or "+CensoredB.Element0[2]+". I owe them enough favours already. Your old friend, "+ CensoredA.Element4[1];

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
