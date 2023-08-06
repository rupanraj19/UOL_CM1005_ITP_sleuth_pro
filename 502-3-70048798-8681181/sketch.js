/*

Officer: 8681181
CaseNum: 502-3-70048798-8681181

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var document_A = [
{
	element_0: {component_0: "radiate", component_1: "rejoice", component_2: "radiate", component_3: "succeed"}, 
	element_1: {component_0: "clip", component_1: "hurry", component_2: "fence", component_3: "rejoice"}, 
	element_2: {component_0: "play", component_1: "bake", component_2: "hurry", component_3: "protect"}
},
{
	element_0: {component_0: "mend", component_1: "meddle", component_2: "syndicate", component_3: "protect"}, 
	element_1: {component_0: "plug", component_1: "plug", component_2: "fence", component_3: "plug"}, 
	element_2: {component_0: "stuff", component_1: "stuff", component_2: "clip", component_3: "succeed"}
},
{
	element_0: {component_0: "stuff", component_1: "hurry", component_2: "play", component_3: "play"}, 
	element_1: {component_0: "consider", component_1: "smile", component_2: "hurry", component_3: "plug"}, 
	element_2: {component_0: "play", component_1: "mend", component_2: "sail", component_3: "hurry"}
},
{
	element_0: {component_0: "start", component_1: "plug", component_2: "consider", component_3: "sneeze"}, 
	element_1: {component_0: "consider", component_1: "charge", component_2: "fence", component_3: "meddle"}, 
	element_2: {component_0: "smile", component_1: "radiate", component_2: "mend", component_3: "play"}
},
{
	element_0: {component_0: "$200,000", component_1: "succeed", component_2: "sneeze", component_3: "hurry"}, 
	element_1: {component_0: "play", component_1: "smile", component_2: "rejoice", component_3: "fence"}, 
	element_2: {component_0: "sail", component_1: "sail", component_2: "consider", component_3: "plug"}
}];

var document_B = [
{//0
	element_0: {component_0: "mend", component_1: "charge", component_2: "play", component_3: "clip"}, 
	element_1: {component_0: "fence", component_1: "bake", component_2: "meddle", component_3: "protect"}, 
	element_2: {component_0: "clip", component_1: "tug", component_2: "bake", component_3: "start"}
},
{//1
	element_0: {component_0: "sneeze", component_1: "fence", component_2: "bake", component_3: "tug"}, 
	element_1: {component_0: "plug", component_1: "plug", component_2: "meddle", component_3: "sneeze"}, 
	element_2: {component_0: "consider", component_1: "ALGOL fish wholesalers", component_2: "COBOL", component_3: "clip"}
},
{//2
	element_0: {component_0: "meddle", component_1: "consider", component_2: "play", component_3: "bake"}, 
	element_1: {component_0: "rejoice", component_1: "sneeze", component_2: "development", component_3: "tug"}, 
	element_2: {component_0: "Edsger", component_1: "donation", component_2: "consider", component_3: "meddle"}
},
{//3
	element_0: {component_0: "you", component_1: "smile", component_2: "play", component_3: "sail"}, 
	element_1: {component_0: "start", component_1: "smile", component_2: "plug", component_3: "stuff"}, 
	element_2: {component_0: "Governor Zuckerberg", component_1: "meddle", component_2: "play", component_3: "play"}
},
{//4
	element_0: {component_0: "protect", component_1: "sail", component_2: "radiate", component_3: "charge"}, 
	element_1: {component_0: "meddle", component_1: "ALGOL", component_2: "sail", component_3: "fence"}, 
	element_2: {component_0: "succeed", component_1: "charge", component_2: "plug", component_3: "rejoice"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+document_B[2].element_2.component_0+", I have just received your very generous "+document_B[2].element_2.component_1+" of "+document_A[4].element_0.component_0+". Thank you. This will be invaluable to our campaign. "+document_B[4].element_1.component_1+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+document_B[3].element_0.component_0+" or "+document_B[1].element_2.component_1+" to the "+ document_A[1].element_0.component_2 + ". Your new "+document_B[2].element_1.component_2+" at the "+document_B[1].element_2.component_2+" can now proceed without impediment. Yours sincerely, "+document_B[3].element_2.component_0;

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
