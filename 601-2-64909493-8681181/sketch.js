/*
Officer: 8681181
CaseNum: 601-2-64909493-8681181

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Yellow stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Blue fill rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 40 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- ellipse()

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var murderer_sighted_coordX = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var murderer_sighted_coordY = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var murder_record = {
	pt_x: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	pt_y: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	murdered_details: ['TAMICA MAUBERT', 'LARRAINE PEGORD', 'BRAD SILVEIRA', 'BRIDGET BROADVIEW', 'GAYLA WILLMAR', 'JENIFFER DEAUVILLE', 'LAVERNE JACQUELIN', 'LINETTE MOHWAWK', 'RANDEE CROME', 'LOUISE ZETLAND', 'MALINDA GOODBURY', 'LIANNE COURTWOOD', 'SUMMER CASIMERE', 'DARBY MYRLE'],
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
	stroke(255,255,0);
	for(var p = 0; p < murderer_sighted_coordX.length;p++){
		ellipse(murderer_sighted_coordX[p], murderer_sighted_coordY[p], 5,5);
	}
	
	noStroke();
	fill(0,0,255);
	for(var i = 0; i < murder_record.pt_x.length; i++){
		rect(murder_record.pt_x[i]-5/2,murder_record.pt_y[i]-5/2, 5, 5);
	}

	for(var i=0; i < murderer_sighted_coordX.length; i++){
		for(var j=0; j < murder_record.pt_x.length; j++){
			if (dist(murderer_sighted_coordX[i],murderer_sighted_coordY[i],murder_record.pt_x[j],murder_record.pt_y[j]) < 40){
			possibleMatches.push ({
				crime:
				{
					x: murder_record.pt_x[j],
					y: murder_record.pt_y[j],
					victimName: murder_record.murdered_details[j]
				},
				suspect: 
				{
					x: murderer_sighted_coordX[i],
					y: murderer_sighted_coordY[i]
				}
			});
		}
		}
	}


	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
