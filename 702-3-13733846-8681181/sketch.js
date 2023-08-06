/*

Officer: 8681181
CaseNum: 702-3-13733846-8681181

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a red car with a Number_Plate of PPJIYZ.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Chase_VehicleObject and the cars in
carObjectsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_vehicle()
{
	/*
	This function should do the following: 
	 - increment Chase_VehicleObject's Dist_Amt property by its Gas_Amount property 
	 - add a random amount between -0.1 and 0.1 to Chase_VehicleObject's Vibrate_Amt property
	 - use the constrain function to constrain Chase_VehicleObject's Vibrate_Amt property to values between 0.05 and 0.97
	 - call the drive_carMotor function passing Chase_VehicleObject as an argument
	*/
	Chase_VehicleObject.Dist_Amt += Chase_VehicleObject.Gas_Amount;
	Chase_VehicleObject.Vibrate_Amt += random(-0.1,0.1);
	Chase_VehicleObject.Vibrate_Amt = constrain(Chase_VehicleObject.Vibrate_Amt, 0.05,0.97);
	drive_carMotor(Chase_VehicleObject);
}


function swap_lanes(vehicle)
{
	/*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordA and LaneCoordB to effect the change.
	 - finally you should return vehicle at the end of the function.
	 hint: You will need to modify the Pos_X property of vehicle.
	*/
	if(vehicle.Pos_X == LaneCoordA){
		vehicle.Pos_X = LaneCoordB;
	}else{
		vehicle.Pos_X = LaneCoordA;
	}
	return vehicle;
}


function vehicle_infront( target_car )
{
	/*
	This function should do the following: 
	 - determine if target_car is in the same lane and less than 200px behind any of the cars in carObjectsList.
	 - do this by traversing carObjectsList and comparing each car's Dist_Amt property to that of target_car.
	 - use the Number_Plate property of each car to ignore cars that match target_car.
	 - if you find a car that matches these requirements then return the Number_Plate property for the car. Otherwise return false.
	*/
	for(var i=0; i <carObjectsList.length;i++){
		var d = carObjectsList[i].Dist_Amt - target_car.Dist_Amt;
		if(target_car.Pos_X == carObjectsList[i].Pos_X && d >0 && d <200 && carObjectsList[i].Number_Plate != target_car.Number_Plate){
			return carObjectsList[i].Number_Plate; 
		}
		
	}
	return false; 	
}


function car_isBySide( targetCar )
{
	/*
	This function should do the following: 
	 - determine if targetCar is parallel with Chase_VehicleObject.
	 - if targetCar is found to be parallel to Chase_VehicleObject then return true.
	 - cars are considered parallel if the absolute difference between their Dist_Amt properties is less than 25 px and they have non-matching Pos_X properties	*/
	if(abs( Chase_VehicleObject.Dist_Amt - targetCar.Dist_Amt) < 25 && Chase_VehicleObject.Pos_X != targetCar.Pos_X){
		return true;
	}
	}


function detect_assailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to Chase_VehicleObject to see if they match the Number_Plate property in the assailant description.
	 - it does this by traversing carObjectsList and calling car_isBySide for each car
.	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
	for(var i=0; i < carObjectsList.length; i++){
			var a = car_isBySide(carObjectsList[i]);
			if(a && carObjectsList[i].Number_Plate == "PPJIYZ"){
				assailant = carObjectsList[i];
			}
		}
	}



function pursue_assailant()
{
	/*
	This function should do the following: 
	 - only operate if the Following_Assailant property of Chase_VehicleObject is true.
	 - scale the Gas_Amount property of Chase_VehicleObject by a factor of 1.001.
	 - use the min function to make sure that Chase_VehicleObject's Gas_Amount property does not exceed 6.
	 - it should call vehicle_infront to detect any cars in front of Chase_VehicleObject.
	 - if a positive result is returned it should check to see if the Number_Plate property of that car matches that of assailant.
	 - for a match, book_assailant should be called, otherwise call swap_lanes.
	*/
	if(Chase_VehicleObject.Following_Assailant == true){
		Chase_VehicleObject.Gas_Amount *= 1.001;
		Chase_VehicleObject.Gas_Amount = min(Chase_VehicleObject.Gas_Amount, 6);

			if(vehicle_infront(Chase_VehicleObject)){
				if(vehicle_infront(Chase_VehicleObject) == "PPJIYZ"){
					book_assailant(assailant);
				}else {
					swap_lanes(Chase_VehicleObject);
				}
			}
	}

}


function book_assailant(vehicle)
{
	/*
	This function should do the following: 
	 - set the apprehended property of vehicle to true.
	 - set the IsApprehending_Assailant property of Chase_VehicleObject to true.
	 - set the Gas_Amount properties of both vehicles to zero.
	*/
	vehicle.apprehended = true;
	Chase_VehicleObject.IsApprehending_Assailant = true;
	Chase_VehicleObject.Gas_Amount = 0;
	vehicle.Gas_Amount = 0;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Chase_VehicleObject;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};
var assailant;

var carObjectsList = [
{ Pos_X: 300, Pos_Y: 0, Dist_Amt: -200, Vehicle_Type: 'greenCar', Number_Plate: 'O8OH2X', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 200, Vehicle_Type: 'redCar', Number_Plate: '5TRF4X', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Amt: 600, Vehicle_Type: 'whiteCar', Number_Plate: 'XO5OQU', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 1000, Vehicle_Type: 'blueCar', Number_Plate: '3GPKTV', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Amt: 1400, Vehicle_Type: 'whiteCar', Number_Plate: 'K7OO5K', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 1800, Vehicle_Type: 'redCar', Number_Plate: 'Q2ZIZV', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 2200, Vehicle_Type: 'redCar', Number_Plate: 'PPJIYZ', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Amt: 2600, Vehicle_Type: 'whiteCar', Number_Plate: '04K61G', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Amt: 3000, Vehicle_Type: 'whiteCar', Number_Plate: 'NS0YP3', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 3400, Vehicle_Type: 'whiteCar', Number_Plate: '2Q2WEA', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 3800, Vehicle_Type: 'greenCar', Number_Plate: '2NAQ2I', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 4200, Vehicle_Type: 'redCar', Number_Plate: '7CUD9C', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 4600, Vehicle_Type: 'whiteCar', Number_Plate: '0PFUL3', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Amt: 5000, Vehicle_Type: 'blueCar', Number_Plate: '4B2BDZ', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 5400, Vehicle_Type: 'redCar', Number_Plate: 'WS7OH0', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 5800, Vehicle_Type: 'redCar', Number_Plate: '9DUK3N', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 6200, Vehicle_Type: 'blueCar', Number_Plate: 'R08Q84', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 300, Pos_Y: 0, Dist_Amt: 6600, Vehicle_Type: 'greenCar', Number_Plate: 'NF7MMI', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 7000, Vehicle_Type: 'greenCar', Number_Plate: '37HI0I', Gas_Amount: 2, exhaust: [  ]} , { Pos_X: 500, Pos_Y: 0, Dist_Amt: 7400, Vehicle_Type: 'whiteCar', Number_Plate: 'F8YWIS', Gas_Amount: 2, exhaust: [  ]} 
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
	LaneCoordA = 300;
	LaneCoordB = 500;

	Chase_VehicleObject = 
	{
		Pos_X: roadLeftEdge + roadWidth/4,
		Pos_Y: 550,
		Dist_Amt: 0,
		Gas_Amount: 3,
		Vibrate_Amt: 0,
		Vehicle_Type: 'detective',
		Number_Plate: '5L3UTH',
		IsApprehending_Assailant: false,
		Following_Assailant: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(assailant)
	{
		if(assailant.apprehended)
		{
			fill(255);

			text("assailant apprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!Chase_VehicleObject.Following_Assailant&& !Chase_VehicleObject.IsApprehending_Assailant)
	{
		move_vehicle();
		var b2b = vehicle_infront( Chase_VehicleObject );
		if(b2b)swap_lanes(Chase_VehicleObject);
		detect_assailant();
		if(assailant)Chase_VehicleObject.Following_Assailant = true;
	}
	else if(!Chase_VehicleObject.IsApprehending_Assailant)
	{
		pursue_assailant();
		move_vehicle();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(assailant)
	{
		if(!assailant.apprehended)
		{
			assailant.Gas_Amount = 5;
			var b2b = vehicle_infront( assailant );
			if(b2b)
			{
				if(b2b.Number_Plate != assailant.Number_Plate)
				{
					swap_lanes(assailant);
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectsList.length; i++)
	{
		carObjectsList[i].Dist_Amt += carObjectsList[i].Gas_Amount;
		carObjectsList[i].Pos_Y = Chase_VehicleObject.Pos_Y - carObjectsList[i].Dist_Amt + Chase_VehicleObject.Dist_Amt;

		if(assailant)
		{
			if(assailant.apprehended)
			{
				if(carObjectsList[i].Pos_X==Chase_VehicleObject.Pos_X)
				{
					if(carObjectsList[i].Dist_Amt<Chase_VehicleObject.Dist_Amt)
					{
						if(carObjectsList[i].Dist_Amt-Chase_VehicleObject.Dist_Amt < 200)
						{
							swap_lanes(carObjectsList[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (Chase_VehicleObject.Dist_Amt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Chase_VehicleObject.Dist_Amt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(Chase_VehicleObject);
	image
	(
		carImages["detective"],
		Chase_VehicleObject.Pos_X - carImages["detective"].width/2 + random(-Chase_VehicleObject.Vibrate_Amt, Chase_VehicleObject.Vibrate_Amt),
		Chase_VehicleObject.Pos_Y + random(-Chase_VehicleObject.Vibrate_Amt, Chase_VehicleObject.Vibrate_Amt)
	);

	//draw all other cars

	for(var i = 0; i < carObjectsList.length; i ++)
	{
		if(carObjectsList[i].Pos_Y < height && carObjectsList[i].Pos_Y > -height/2)
		{
			image(
			carImages[carObjectsList[i].Vehicle_Type],
			carObjectsList[i].Pos_X - carImages[carObjectsList[i].Vehicle_Type].width/2,
			carObjectsList[i].Pos_Y
			);
			drive_carMotor(carObjectsList[i]);

			drawExhaust(carObjectsList[i]);
		}
	}

}

function drive_carMotor(car)
{

	car.exhaust.push({size: 2, x: car.Pos_X, y: car.Pos_Y + carImages[car.Vehicle_Type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Gas_Amount/3);
		if(car.Vehicle_Type != "detective")car.exhaust[i].y += (Chase_VehicleObject.Gas_Amount - car.Gas_Amount);
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
