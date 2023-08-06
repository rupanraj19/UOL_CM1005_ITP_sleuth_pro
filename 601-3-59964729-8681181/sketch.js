/*
Officer: 8681181
CaseNum: 601-3-59964729-8681181

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, DodgerBlue stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MidnightBlue stroke triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 56 pixels of any of the crimes within no more than 3 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- ellipse()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var casey_logbook = {
	LocX: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	LocY: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	day: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var attack_logbook = {
	CoordinateX: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	CoordinateY: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	recordedDay: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	MurderedDetails: ['HANG NIEMELA', 'TU DAVISWOOD', 'BRAD SILVEIRA', 'JENIFFER DEAUVILLE', 'JULIANA ADVERSANE', 'JESSIA PORTOS', 'LAVERNE JACQUELIN', 'BRIDGET BROADVIEW', 'LIANNE COURTWOOD', 'LESLEY MONKSFORD', 'DEEDEE PHINNEY', 'GAYLA WILLMAR', 'SUMMER CASIMERE', 'TAMICA MAUBERT', 'MAJORIE JENI'],
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
	stroke(30,144,255);
	for(var i = 0; i < casey_logbook.LocX.length; i++){
		ellipse(casey_logbook.LocX[i],casey_logbook.LocY[i], 5, 5);
	}
	noStroke();
	stroke(25,25,112);
	for(var j=0; j < attack_logbook.recordedDay.length; j++){
		triangle(attack_logbook.CoordinateX[j], attack_logbook.CoordinateY[j] -5/ sqrt(3),attack_logbook.CoordinateX[j]-5/2,attack_logbook.CoordinateY[j]+5/(2 * sqrt(3)),attack_logbook.CoordinateX[j]+5/2,attack_logbook.CoordinateY[j]+5/(2 * sqrt(3)));
	}
	for(var i = 0; i < casey_logbook.LocX.length; i++){
		for(var j=0; j < attack_logbook.recordedDay.length; j++){
			if(dist(casey_logbook.LocX[i],casey_logbook.LocY[i],attack_logbook.CoordinateX[j],attack_logbook.CoordinateY[j]) < 56){

				possibleMatches.push(
                {crime: 
                    {
                    x: attack_logbook.CoordinateX[j], 
                    y: attack_logbook.CoordinateY[j], 
                    victimName: attack_logbook.MurderedDetails[j]
                    },
                    suspect: 
                    {x: casey_logbook.LocX[i], 
                     y: casey_logbook.LocY[i]
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
