// Rohan Skariah 
// Tangia Sun
// Ryan Teoh 
// Justin Wong 

//We are using canvas to draw the shapes
var canvas = document.querySelector('canvas');

//Set the canvas dimensions
canvas.width = 200;
canvas.height = 200;
var c = canvas.getContext('2d');

//Scaling for the objects
var gridFactor = 10;

//Allows the users to change the scaling of the graph where the shapes appear.
function changeGridFactor(newGridFactor)
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    gridFactor = newGridFactor;
    drawGrid();
}

// The function draws the grid in order to gain perspective for the shapes
function drawGrid()
{
    // Grid 
    var xGrid = 0;
    var yGrid = 0;
    c.globalAlpha = 0.2;
    // Vertical lines
    for (var i = 0; i < canvas.width / gridFactor; i++)
    {
        c.beginPath();
        c.moveTo(xGrid, 0);
        c.lineTo(xGrid, canvas.height);
        c.strokeStyle = "black";
        c.stroke();
        xGrid += gridFactor * 5;
    }
    // Horizontal lines
    for (var j = 0; j < canvas.height / gridFactor; j++)
    {
        c.beginPath();
        c.moveTo(0, yGrid);
        c.lineTo(canvas.width, yGrid);
        c.strokeStyle = "black";
        c.stroke();
        yGrid += gridFactor * 5;
    }
    c.globalAlpha = 1;;
    c.strokeStyle = "black";
    c.strokeRect(0, 0, canvas.width, canvas.height);
}

// Clears the canvas
function clearDrawWindow()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
}


//General Function to draw Polygon. Dynamic behavior based on number of sides and input angles
function makePolygon(inputX, inputY)
{
    this.xPos = parseInt(canvas.width) / 2;
    this.yPos = parseInt(canvas.height) / 2;

    this.sides = 3;
    this.angles = [60.0, 60.0, 60.0];
}

function update(inputSides, inputAngles) {
        super.sides = inputSides;
        super.angles = inputAngles;
        draw();
    }


function draw() {
// no-op
}

//Draw the circle with the input from the user
function drawCircle(radius)
{
    var xPos = parseInt(canvas.width) / 2 / gridFactor;
    var yPos = parseInt(canvas.height) / 2 / gridFactor;
    radius = parseInt(radius);

    if ((xPos + radius)> (canvas.width  / gridFactor) || (yPos + radius)> (canvas.height  / gridFactor))
    {
        alert("Not a valid input for this size window");
    }
    else if (radius > 0)
    {
        clearDrawWindow();
        drawGrid();
        c.fillText("Radius = " + radius, gridFactor * (radius + xPos) + 10, yPos * gridFactor);
        
        c.beginPath();
        c.arc(xPos * gridFactor, yPos * gridFactor, radius * gridFactor, 0, 2* Math.PI , true);
        c.stroke();
    }
    else
        alert("Values must be non-negative, duh");
}

// Draws the rectangle shape
function drawRect(width, height)
{
    if (width < 0 || height < 0)
    {
        alert("Values must be non-negative, duh");
    }
    else if (width > canvas.width / gridFactor || height > canvas.height / gridFactor)
    {
        alert("Not a valid input for this size window");
    }
    else{
        var width = parseInt(width) * gridFactor;
        var height = parseInt(height) * gridFactor;
        var xPos = parseInt(canvas.width) / 2 ;
        var yPos = parseInt(canvas.height) / 2 ;
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(); 
        c.strokeStyle = "black";
        c.strokeRect(xPos - (width / 2), yPos - (height / 2), width, height);
    }
}

// Draws the triangle
function drawTriangle(side1, side2, angle, equal)
{
    var side1 = parseInt(side1) * gridFactor;
    var side2 = parseInt(side2) * gridFactor;
    var side3;
    var angle = (parseInt(angle) % 360) * Math.PI / 180;
    var xPos1, xPos2, xPos3, yPos1, yPos2, yPos3;

    xPos1 = 0;
    yPos1 = 0;
    xPos2 = side1;
    yPos2 = 0;
    xPos3 = Math.round(side2 * Math.cos(angle));
    yPos3 = Math.round(side2 * Math.sin(angle));
    yPos3 = 2 * yPos1 - yPos3;

    var xAve = (xPos1 + xPos2 + xPos3) / 3;
    var yAve = (yPos1 + yPos2 + yPos3) / -3;

    var xOffset = (canvas.width / 2) - xAve;
    var yOffset = (canvas.height / 2) + yAve;
    
    xPos1 += xOffset;
    xPos2 += xOffset;
    xPos3 += xOffset;
    yPos1 += yOffset;
    yPos2 += yOffset;
    yPos3 += yOffset;

    if (xPos1 < 0 || xPos2 < 0 || xPos3 < 0 || xPos1 > canvas.width || xPos2 > canvas.width || xPos3 > canvas.width || 
        yPos1 < 0 || yPos2 < 0 || yPos3 < 0 || yPos1 > canvas.height || yPos2 > canvas.height || yPos3 > canvas.height)
        {
            alert("Not a valid input for this size window");
        }
    else{
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();

        c.beginPath();
        c.moveTo(xPos1, yPos1);
        c.lineTo(xPos2, yPos2);
        c.lineTo(xPos3, yPos3);
        c.lineTo(xPos1, yPos1);
        c.strokeStyle = "black";  
        c.stroke();

        if (equal)
        {
            c.beginPath();
            c.arc(xPos1, yPos1, (xPos2 - xPos1) / 10, 2*Math.PI - angle, 0 , false);
            c.stroke();

            c.beginPath();
            c.arc(xPos2, yPos2, (xPos2 - xPos1) / 10, Math.PI + angle, Math.PI , true);
            c.stroke();

            c.beginPath();
            c.arc(xPos3, yPos3, (xPos2 - xPos1) / 10, Math.PI - angle, Math.PI - angle * 2, true);
            c.stroke();
        }
        else
        {
            c.beginPath();
            c.arc(xPos1, yPos1, (xPos2 - xPos1) / 10, 2*Math.PI - angle, 0 , false);
            c.stroke();
        }
    }
}

// Draws the ellipse
function drawEllipse(majorRadius, minorRadius)
{
    if ((majorRadius * gridFactor > canvas.height) || (majorRadius * gridFactor > canvas.width) || 
        (minorRadius * gridFactor > canvas.height) || (minorRadius * gridFactor > canvas.width))
        {
            alert("Not a valid input for this size window");
        }
    else {
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        c.beginPath();
        c.ellipse(canvas.width / 2, canvas.height / 2, majorRadius * gridFactor, minorRadius * gridFactor, 0, 0, 2 * Math.PI, false);
        c.stroke();
    }
}

console.log(canvas);