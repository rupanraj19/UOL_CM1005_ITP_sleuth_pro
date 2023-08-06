/*

Officer: 8681181
CaseNum: 702-2-37613972-8681181

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a red car with a Number_Plate of MAPXQD. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPI_Vehicle and the cars in
vehicleObjectArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	/*
	This function should do the following: 
	 - increment SleuthPI_Vehicle's Dist_Travelled property by its Speed_Value property 
	 - add a random amount between -0.07 and 0.07 to SleuthPI_Vehicle's Rumble_Value property
	 - use the constrain function to constrain SleuthPI_Vehicle's Rumble_Value property to values between 0.1 and 1.11
	 - call the turnoverCarEngine function passing SleuthPI_Vehicle as an argument
	*/
	SleuthPI_Vehicle.Dist_Travelled += SleuthPI_Vehicle.Speed_Value;
	SleuthPI_Vehicle.Rumble_Value += random(-0.07,0.07);
	SleuthPI_Vehicle.Rumble_Value = constrain(SleuthPI_Vehicle.Rumble_Value, 0.1, 1.11);
	turnoverCarEngine(SleuthPI_Vehicle);
}


function switchLanes(target_vehicle)
{
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_coordA and lane_coordB to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the Pos_X property of target_vehicle.
	*/
	if(target_vehicle.Pos_X == lane_coordA){
		target_vehicle.Pos_X = lane_coordB;
	}else {
		target_vehicle.Pos_X = lane_coordA;
	}
	return target_vehicle;

}


function searchVehicleIsInfront( targetVehicleA, targetVehicleB )
{
	/*
	This function should do the following: 
	 - determine if targetVehicleA is in the same lane and less than 200px behind targetVehicleB.
	 - do this by comparing the two cars' Dist_Travelled properties
	 - if these requirements are met then return targetVehicleB. Otherwise return false.
	*/
	if(targetVehicleA.Pos_X == targetVehicleB.Pos_X && targetVehicleB.Dist_Travelled > targetVehicleA.Dist_Travelled 
		&&( targetVehicleB.Dist_Travelled - targetVehicleA.Dist_Travelled)<200){
			return targetVehicleB;
		}else{
			return false;
		}
}


function checkAtSide()
{	/*
	This function should do the following: 
	 - traverse vehicleObjectArray and determine if any of the cars are parallel with SleuthPI_Vehicle.
	 - if a car is found to be parallel to SleuthPI_Vehicle then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their Dist_Travelled properties is less than 25 px and they have non-matching Pos_X properties	*/
		for(var i=0; i<vehicleObjectArray.length;i++){
			if(abs( SleuthPI_Vehicle.Dist_Travelled - vehicleObjectArray[i].Dist_Travelled )<25 && vehicleObjectArray[i].Pos_X != SleuthPI_Vehicle.Pos_X){
				return i;
				
			}
		}
	}

function spotCriminal()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to SleuthPI_Vehicle to see if they match the Number_Plate property in the criminal description.
	 - it does this by calling checkAtSide.
	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
*/
var a = checkAtSide()

		if(a && vehicleObjectArray[a].Number_Plate == "MAPXQD"){
			return vehicleObjectArray[a];
		}
		return false;
		
	}




//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPI_Vehicle;

var roadWidth;
var roadLeftEdge;
var lane_coordA;
var lane_coordB;
var carImages = {};
var criminal;

var vehicleObjectArray = [
{ Pos_X: 500, Pos_Y: 0, Dist_Travelled: -200, Vehicle_Category: 'blueCar', Number_Plate: 'E4ZJFU', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 200, Vehicle_Category: 'redCar', Number_Plate: '5FM8AU', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 600, Vehicle_Category: 'greenCar', Number_Plate: '73F7XU', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 1000, Vehicle_Category: 'whiteCar', Number_Plate: '3CWYF2', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 1400, Vehicle_Category: 'redCar', Number_Plate: 'F86V7T', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 1800, Vehicle_Category: 'blueCar', Number_Plate: 'OJYY9G', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 2200, Vehicle_Category: 'redCar', Number_Plate: 'I09Z08', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 2600, Vehicle_Category: 'greenCar', Number_Plate: 'ETLP29', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 3000, Vehicle_Category: 'redCar', Number_Plate: 'MAPXQD', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 3400, Vehicle_Category: 'whiteCar', Number_Plate: 'AAAF7F', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 3800, Vehicle_Category: 'whiteCar', Number_Plate: '5HFZE7', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 4200, Vehicle_Category: 'blueCar', Number_Plate: '45TGPL', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 4600, Vehicle_Category: 'greenCar', Number_Plate: 'N45D4L', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 5000, Vehicle_Category: 'redCar', Number_Plate: 'OZURGH', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 5400, Vehicle_Category: 'whiteCar', Number_Plate: 'Z3DQOS', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 5800, Vehicle_Category: 'greenCar', Number_Plate: '1XMRQF', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 6200, Vehicle_Category: 'greenCar', Number_Plate: 'SDT5CE', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 6600, Vehicle_Category: 'greenCar', Number_Plate: 'XKFKH4', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Travelled: 7000, Vehicle_Category: 'redCar', Number_Plate: 'W0TBQM', Speed_Value: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Travelled: 7400, Vehicle_Category: 'whiteCar', Number_Plate: 'TL32H4', Speed_Value: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_coordA = 300;
	lane_coordB = 500;

	SleuthPI_Vehicle = 
	{
		Pos_X: roadLeftEdge + roadWidth/4,
		Pos_Y: 550,
		Dist_Travelled: 0,
		Speed_Value: 3,
		Rumble_Value: 0,
		Vehicle_Category: 'detective',
		Number_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(criminal)
	{
		fill(255);

		text("criminal found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	moveCar();
	for(var i = 0; i < vehicleObjectArray.length; i++)
	{
var b2b = searchVehicleIsInfront(SleuthPI_Vehicle, vehicleObjectArray[i]);
		if(b2b)switchLanes(SleuthPI_Vehicle);
	}
	var a = spotCriminal();
	if(a != false)criminal = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleObjectArray.length; i++)
	{
		vehicleObjectArray[i].Dist_Travelled += vehicleObjectArray[i].Speed_Value;
		vehicleObjectArray[i].Pos_Y = SleuthPI_Vehicle.Pos_Y - vehicleObjectArray[i].Dist_Travelled + SleuthPI_Vehicle.Dist_Travelled;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthPI_Vehicle.Dist_Travelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthPI_Vehicle.Dist_Travelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(SleuthPI_Vehicle);
	image
	(
		carImages["detective"],
		SleuthPI_Vehicle.Pos_X - carImages["detective"].width/2 + random(-SleuthPI_Vehicle.Rumble_Value, SleuthPI_Vehicle.Rumble_Value),
		SleuthPI_Vehicle.Pos_Y + random(-SleuthPI_Vehicle.Rumble_Value, SleuthPI_Vehicle.Rumble_Value)
	);

	//draw all other cars

	for(var i = 0; i < vehicleObjectArray.length; i ++)
	{
		if(vehicleObjectArray[i].Pos_Y < height && vehicleObjectArray[i].Pos_Y > -height/2)
		{
			image(
			carImages[vehicleObjectArray[i].Vehicle_Category],
			vehicleObjectArray[i].Pos_X - carImages[vehicleObjectArray[i].Vehicle_Category].width/2,
			vehicleObjectArray[i].Pos_Y
			);
			turnoverCarEngine(vehicleObjectArray[i]);

			drawExhaust(vehicleObjectArray[i]);
		}
	}

}

function turnoverCarEngine(car)
{

	car.exhaust.push({size: 2, x: car.Pos_X, y: car.Pos_Y + carImages[car.Vehicle_Category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Speed_Value/3);
		if(car.Vehicle_Category != "detective")car.exhaust[i].y += (SleuthPI_Vehicle.Speed_Value - car.Speed_Value);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
