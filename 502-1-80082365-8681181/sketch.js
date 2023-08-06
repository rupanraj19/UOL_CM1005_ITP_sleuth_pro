/*

Officer: 8681181
CaseNum: 502-1-80082365-8681181

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var EvidenceA = [
	{Detail0: "fence", Detail1: "meddle", Detail2: "charge"}, //0
	{Detail0: "clip", Detail1: "charge", Detail2: "hurry"}, //1
	{Detail0: "delicate", Detail1: "sneeze", Detail2: "tug"}, //2
	{Detail0: "sneeze", Detail1: "stuff", Detail2: "sneeze"},  //3
	{Detail0: "succeed", Detail1: "rejoice", Detail2: "rejoice"}, //4
	{Detail0: "a donation", Detail1: "rejoice", Detail2: "she has"}, //5
	{Detail0: "tug", Detail1: "bake", Detail2: "radiate"}, //6
	{Detail0: "bake", Detail1: "consider", Detail2: "radiate"}, //7 
	{Detail0: "rejoice", Detail1: "rejoice", Detail2: "syndicate"},  //8 
	{Detail0: "hurry", Detail1: "sneeze", Detail2: "smile"} //9
];

var EvidenceB = [
	{Detail0: "Edsger", Detail1: "stuff", Detail2: "Governor Zuckerberg"}, 
	{Detail0: "romantic", Detail1: "plug", Detail2: "succeed"}, 
	{Detail0: "tug", Detail1: "plug", Detail2: "stuff"}, 
	{Detail0: "succeed", Detail1: "plug", Detail2: "sail"}, 
	{Detail0: "meddle", Detail1: "clip", Detail2: "consider"}, 
	{Detail0: "hurry", Detail1: "clip", Detail2: "consider"}, 
	{Detail0: "consider", Detail1: "sail", Detail2: "COBOL"}, 
	{Detail0: "charge", Detail1: "clip", Detail2: "protect"}, 
	{Detail0: "clip", Detail1: "succeed", Detail2: "radiate"}, 
	{Detail0: "smile", Detail1: "Hopper’s", Detail2: "capital"}
];

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
  redactedText = "My dearest " +EvidenceB[0].Detail0 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+ EvidenceB[9].Detail1 + " intervention. I suspect that "+ EvidenceA[5].Detail2 +" a "+EvidenceB[1].Detail0+" interest at the "+EvidenceB[6].Detail2+". I and the "+EvidenceA[8].Detail2+" appreciate your many contributions over the years. However, this is a most "+EvidenceA[2].Detail0+" matter which would require significant "+EvidenceB[9].Detail2+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+EvidenceA[5].Detail0+" to my forthcoming campaign would help. Yours sincerely, "+EvidenceB[0].Detail2;

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
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
