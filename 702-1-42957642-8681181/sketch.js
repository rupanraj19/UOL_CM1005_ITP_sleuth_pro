/*

Officer: 8681181
CaseNum: 702-1-42957642-8681181

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Chase_CarObject and the cars in
TrafficArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function driveCar()
{
	/*
	This function should do the following: 
	 - increment Chase_CarObject's Miles_Amt property by its Gas_Amount property 
	 - add a random amount between -0.01 and 0.01 to Chase_CarObject's Vibrate_Amt property
	 - use the constrain function to constrain Chase_CarObject's Vibrate_Amt property to values between 0.1 and 1.21
	 - call the runEngine function passing Chase_CarObject as an argument
	*/
	Chase_CarObject.Miles_Amt += Chase_CarObject.Gas_Amount;
	Chase_CarObject.Vibrate_Amt += random(-0.01,0.01);
	Chase_CarObject.Vibrate_Amt = constrain(Chase_CarObject.Vibrate_Amt, 0.1, 1.21);
	runEngine(Chase_CarObject);
}


function changeLanes(carObj)
{
	/*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_coordinateA and Lane_coordinateB to effect the change.
	 hint: You will need to modify the x property of carObj.
	*/
	if(carObj.x == Lane_coordinateA){
		carObj.x = Lane_coordinateB;
	}else {
		carObj.x = Lane_coordinateA;
	}
	return carObj;
}


function searchVehicleIsInfront( Car_objA, Car_objB )
{
	/*
	This function should do the following: 
	 - determine if Car_objA is in the same lane and less than 200px behind Car_objB.
	 - do this by comparing the two cars' Miles_Amt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
	var a = Car_objB.Miles_Amt - Car_objA.Miles_Amt;
	if(a > 0 && a < 200 && Car_objB.x == Car_objA.x ){
		return true;
	}else{
		return false;
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Chase_CarObject;

var roadWidth;
var roadLeftEdge;
var Lane_coordinateA;
var Lane_coordinateB;
var carImages = {};

var TrafficArray = [
{ x: 300, y: 0, Miles_Amt: -200, Car_Variety: 'blueCar', Licence_Plate: 'ES6HNL', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 200, Car_Variety: 'whiteCar', Licence_Plate: 'XX7E6Q', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 600, Car_Variety: 'blueCar', Licence_Plate: 'WPT5CO', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 1000, Car_Variety: 'whiteCar', Licence_Plate: '8SIXLC', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 1400, Car_Variety: 'greenCar', Licence_Plate: 'KN9YQP', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 1800, Car_Variety: 'greenCar', Licence_Plate: 'OBBHOG', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 2200, Car_Variety: 'blueCar', Licence_Plate: '3CW3MD', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 2600, Car_Variety: 'redCar', Licence_Plate: 'V6VWGT', Gas_Amount: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amt: 3000, Car_Variety: 'greenCar', Licence_Plate: '4U863V', Gas_Amount: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amt: 3400, Car_Variety: 'blueCar', Licence_Plate: 'PMM6JG', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 3800, Car_Variety: 'whiteCar', Licence_Plate: 'UCIVD4', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 4200, Car_Variety: 'whiteCar', Licence_Plate: 'C6C2MT', Gas_Amount: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amt: 4600, Car_Variety: 'redCar', Licence_Plate: 'IUDV9W', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 5000, Car_Variety: 'blueCar', Licence_Plate: 'VC5ZPF', Gas_Amount: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amt: 5400, Car_Variety: 'blueCar', Licence_Plate: 'T1Y97K', Gas_Amount: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amt: 5800, Car_Variety: 'blueCar', Licence_Plate: 'RU00OI', Gas_Amount: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amt: 6200, Car_Variety: 'greenCar', Licence_Plate: '4W6GAV', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 6600, Car_Variety: 'redCar', Licence_Plate: '1RJ7QA', Gas_Amount: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amt: 7000, Car_Variety: 'whiteCar', Licence_Plate: 'NWHUWF', Gas_Amount: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amt: 7400, Car_Variety: 'greenCar', Licence_Plate: 'L9WDY2', Gas_Amount: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_coordinateA = 300;
	Lane_coordinateB = 500;

	Chase_CarObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		Miles_Amt: 0,
		Gas_Amount: 3,
		Vibrate_Amt: 0,
		Car_Variety: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	driveCar();
	for(var i = 0; i < TrafficArray.length; i++)
	{
var b2b = searchVehicleIsInfront(Chase_CarObject, TrafficArray[i]);
		if(b2b)changeLanes(Chase_CarObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < TrafficArray.length; i++)
	{
		TrafficArray[i].Miles_Amt += TrafficArray[i].Gas_Amount;
		TrafficArray[i].y = Chase_CarObject.y - TrafficArray[i].Miles_Amt + Chase_CarObject.Miles_Amt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (Chase_CarObject.Miles_Amt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Chase_CarObject.Miles_Amt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Chase_CarObject);
	image
	(
		carImages["detective"],
		Chase_CarObject.x - carImages["detective"].width/2 + random(-Chase_CarObject.Vibrate_Amt, Chase_CarObject.Vibrate_Amt),
		Chase_CarObject.y + random(-Chase_CarObject.Vibrate_Amt, Chase_CarObject.Vibrate_Amt)
	);

	//draw all other cars

	for(var i = 0; i < TrafficArray.length; i ++)
	{
		if(TrafficArray[i].y < height && TrafficArray[i].y > -height/2)
		{
			image(
			carImages[TrafficArray[i].Car_Variety],
			TrafficArray[i].x - carImages[TrafficArray[i].Car_Variety].width/2,
			TrafficArray[i].y
			);
			runEngine(TrafficArray[i]);

			drawExhaust(TrafficArray[i]);
		}
	}

}

function runEngine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.Car_Variety].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Gas_Amount/3);
		if(car.Car_Variety != "detective")car.exhaust[i].y += (Chase_CarObject.Gas_Amount - car.Gas_Amount);
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
