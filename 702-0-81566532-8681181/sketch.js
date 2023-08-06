/*

Officer: 8681181
CaseNum: 702-0-81566532-8681181

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of chase_vehicle to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car()
{
	/*
	This function should do the following: 
	 - increment chase_vehicle's miles_amnt property by its gas_val property 
	 - add a random amount between -0.07 and 0.07 to chase_vehicle's vibrate_value property
	 - use the constrain function to constrain chase_vehicle's vibrate_value property to values between 0.05 and 0.82
	 - call the Turn_Car_motor function passing chase_vehicle as an argument
	*/
	chase_vehicle.miles_amnt += chase_vehicle.gas_val;
	chase_vehicle.vibrate_value += random(-0.07, 0.07);
	chase_vehicle.vibrate_value = constrain(chase_vehicle.vibrate_value, 0.05, 0.82);
	Turn_Car_motor(chase_vehicle);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chase_vehicle;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	chase_vehicle = 
	{
		position_x: roadLeftEdge + roadWidth/4,
		position_y: 300,
		miles_amnt: 0,
		gas_val: 3,
		vibrate_value: 0,
		car_classification: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Move_Car();


	drawRoad();
	drawCars();
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
		roadLeftEdge + roadWidth/2 , i * 100 + (chase_vehicle.miles_amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chase_vehicle.miles_amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(chase_vehicle);
	image
	(
		carImages["detective"],
		chase_vehicle.position_x - carImages["detective"].width/2 + random(-chase_vehicle.vibrate_value, chase_vehicle.vibrate_value),
		chase_vehicle.position_y + random(-chase_vehicle.vibrate_value, chase_vehicle.vibrate_value)
	);

}

function Turn_Car_motor(car)
{

	car.exhaust.push({size: 2, x: car.position_x, y: car.position_y + carImages[car.car_classification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_val/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
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
