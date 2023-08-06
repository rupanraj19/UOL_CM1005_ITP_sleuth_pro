/*

Officer: 8681181
CaseNum: 501-1-12602717-8681181

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the itemImage variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImage;

function preload() {
    backgroundImg = loadImage("background.jpg");
    itemImage = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
  
}

function draw() {
    // add your for loop below

    for(var i = 0; i < 8; i++){
        image(itemImage, 815+ 43*i, 390 +25*i);
    }
    for (var k = 0; k < 8; k++){
        image(itemImage, 830 + 30*k, 524 + 34* -k);
    }
}

