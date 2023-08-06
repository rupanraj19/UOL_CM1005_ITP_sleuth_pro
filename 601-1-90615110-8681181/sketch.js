/*
Officer: 8681181
CaseNum: 601-1-90615110-8681181

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Navy stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, CornflowerBlue fill ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var killerSighted_Coordinate_X = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var killerSighted_Coordinate_Y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var crimeRecorded = {
	Pt_X: [403, 402, 427, 646, 639, 830, 809, 844, 802, 683, 552, 629, 712, 783, 415, 561, 562, 751, 680, 626, 701, 838, 322, 468, 625],
	Pt_Y: [401, 360, 403, 284, 264, 434, 443, 496, 350, 413, 464, 498, 562, 603, 225, 282, 392, 283, 359, 436, 455, 565, 508, 556, 737],
};

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
	stroke(0, 0, 128); // set stroke color to navy
	for (var i = 0; i < killerSighted_Coordinate_X.length; i++) {
  	rect(killerSighted_Coordinate_X[i] - 5/2, killerSighted_Coordinate_Y[i] - 5/2, 5, 5);
	}
	noStroke(); // remove stroke
	fill(100, 149, 237); // set fill color to cornflower blue
	for (var i = 0; i < crimeRecorded.Pt_X.length; i++) {
  	ellipse(crimeRecorded.Pt_X[i], crimeRecorded.Pt_Y[i], 5, 5);
	}





}

//We are not using the draw function this time
