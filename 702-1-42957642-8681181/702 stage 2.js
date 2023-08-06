/*

Officer: 8781400
CaseNum: 702-1-79724810-8781400

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

HINT: make sure you take a look at the initialisation of investigatorVehicle and the cars in
TrafficObjectsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car()
{
	/*
	This function should do the following: 
	 - increment investigatorVehicle's distAmnt property by its gasAmt property 
	 - add a random amount between -0.04 and 0.04 to investigatorVehicle's engineRumbleAmount property
	 - use the constrain function to constrain investigatorVehicle's engineRumbleAmount property to values between 0.04 and 1.21
	 - call the Cycle_CarEngine function passing investigatorVehicle as an argument
	*/
    
    investigatorVehicle.distAmnt += investigatorVehicle.gasAmt
    investigatorVehicle.engineRumbleAmount += random(-0.04, 0.04)
    investigatorVehicle.engineRumbleAmount = constrain(investigatorVehicle.engineRumbleAmount, 0.04, 1.21)
    Cycle_CarEngine(investigatorVehicle)
}


function Cross_Lanes(targetVehicle)
{
	/*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordinateA and LaneCoordinateB to effect the change.
	 - finally you should return targetVehicle at the end of the function.
	 hint: You will need to modify the xPos property of targetVehicle.
	*/
    if(targetVehicle.xPos == LaneCoordinateA){
		targetVehicle.xPos = LaneCoordinateB;
	}else{
		targetVehicle.xPos = LaneCoordinateA;
	}
	return targetVehicle;
}


function SearchVehicle_IsInfront( vehicle )
{
	/*
	This function should do the following: 
	 - determine if vehicle is in the same lane and less than 200px behind any of the cars in TrafficObjectsList.
	 - do this by traversing TrafficObjectsList and comparing each car's distAmnt property to that of vehicle.
	 - if you find a car that matches these requirements then return the licencePlate property for the car. Otherwise return false.
	*/
	for(var i=0; i<TrafficObjectsList.length; i++){
		var d = TrafficObjectsList[i].distAmnt - vehicle.distAmnt;
		if(d < 200  && d > 0 && TrafficObjectsList[i].xPos == vehicle.xPos){
			return TrafficObjectsList[i].licencePlate;
		}
		
	}
    return false;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorVehicle;

var roadWidth;
var roadLeftEdge;
var LaneCoordinateA;
var LaneCoordinateB;
var carImages = {};

var TrafficObjectsList = [
{ xPos: 300, yPos: 0, distAmnt: -200, vehicleType: 'whiteCar', licencePlate: 'FKASAR', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 200, vehicleType: 'greenCar', licencePlate: 'JBFMP9', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 600, vehicleType: 'greenCar', licencePlate: 'GK49CB', gasAmt: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distAmnt: 1000, vehicleType: 'greenCar', licencePlate: 'SLSD1K', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 1400, vehicleType: 'redCar', licencePlate: 'JSJ7VN', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 1800, vehicleType: 'greenCar', licencePlate: 'L2LTGC', gasAmt: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distAmnt: 2200, vehicleType: 'redCar', licencePlate: 'YYB4GR', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 2600, vehicleType: 'whiteCar', licencePlate: 'ZMMPR2', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 3000, vehicleType: 'greenCar', licencePlate: 'Z8YFRQ', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 3400, vehicleType: 'whiteCar', licencePlate: 'REC4TA', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 3800, vehicleType: 'greenCar', licencePlate: 'QVXIA9', gasAmt: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distAmnt: 4200, vehicleType: 'greenCar', licencePlate: '0KY5UW', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 4600, vehicleType: 'greenCar', licencePlate: 'LK8H44', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 5000, vehicleType: 'whiteCar', licencePlate: 'SGXM14', gasAmt: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distAmnt: 5400, vehicleType: 'greenCar', licencePlate: '6MS7IK', gasAmt: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distAmnt: 5800, vehicleType: 'greenCar', licencePlate: 'FH6Z88', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 6200, vehicleType: 'redCar', licencePlate: 'KJKRTW', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 6600, vehicleType: 'redCar', licencePlate: '1CQK1Q', gasAmt: 2, exhaust: [  ]} , { xPos: 500, yPos: 0, distAmnt: 7000, vehicleType: 'whiteCar', licencePlate: 'S8C3W7', gasAmt: 2, exhaust: [  ]} , { xPos: 300, yPos: 0, distAmnt: 7400, vehicleType: 'redCar', licencePlate: '2PDHNP', gasAmt: 2, exhaust: [  ]} 
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
	LaneCoordinateA = 300;
	LaneCoordinateB = 500;

	investigatorVehicle = 
	{
		xPos: roadLeftEdge + roadWidth/4,
		yPos: 550,
		distAmnt: 0,
		gasAmt: 3,
		engineRumbleAmount: 0,
		vehicleType: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Drive_Car();
	var b2b = SearchVehicle_IsInfront( investigatorVehicle );
	if(b2b)Cross_Lanes(investigatorVehicle);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < TrafficObjectsList.length; i++)
	{
		TrafficObjectsList[i].distAmnt += TrafficObjectsList[i].gasAmt;
		TrafficObjectsList[i].yPos = investigatorVehicle.yPos - TrafficObjectsList[i].distAmnt + investigatorVehicle.distAmnt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (investigatorVehicle.distAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (investigatorVehicle.distAmnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(investigatorVehicle);
	image
	(
		carImages["detective"],
		investigatorVehicle.xPos - carImages["detective"].width/2 + random(-investigatorVehicle.engineRumbleAmount, investigatorVehicle.engineRumbleAmount),
		investigatorVehicle.yPos + random(-investigatorVehicle.engineRumbleAmount, investigatorVehicle.engineRumbleAmount)
	);

	//draw all other cars

	for(var i = 0; i < TrafficObjectsList.length; i ++)
	{
		if(TrafficObjectsList[i].yPos < height && TrafficObjectsList[i].yPos > -height/2)
		{
			image(
			carImages[TrafficObjectsList[i].vehicleType],
			TrafficObjectsList[i].xPos - carImages[TrafficObjectsList[i].vehicleType].width/2,
			TrafficObjectsList[i].yPos
			);
			Cycle_CarEngine(TrafficObjectsList[i]);

			drawExhaust(TrafficObjectsList[i]);
		}
	}

}

function Cycle_CarEngine(car)
{

	car.exhaust.push({size: 2, x: car.xPos, y: car.yPos + carImages[car.vehicleType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasAmt/3);
		if(car.vehicleType != "detective")car.exhaust[i].y += (investigatorVehicle.gasAmt - car.gasAmt);
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
