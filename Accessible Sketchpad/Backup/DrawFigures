var canvas = document.querySelector('canvas');

// var svg = document.querySelector('svg');
// // get svg data
// var xml = new XMLSerializer().serializeToString(svg);

// // make it base64
// var svg64 = btoa(xml);
// var b64Start = 'data:image/svg+xml;base64,';

// // prepend a "header"
// var image64 = b64Start + svg64;

// // set it as the source of the img element
// img.onload = function() {
//     // draw the image onto the canvas
//     canvas.getContext('2d').drawImage(img, 0, 0);
// }
// img.src = image64;

canvas.width = Math.ceil(window.innerWidth / 2 / 100) * 100;
canvas.height = Math.ceil(window.innerHeight / 2 / 100) * 100;



var c = canvas.getContext('2d');

const gridFactor = 10;

function drawGrid()
{
    // Grid 
    var xGrid = 0;
    var yGrid = 0;
    c.globalAlpha = 0.2;
    for (var i = 0; i < canvas.width / gridFactor; i++)
    {
        c.beginPath();
        c.moveTo(xGrid, 0);
        c.lineTo(xGrid, canvas.height);
        c.strokeStyle = "black";
        c.stroke();
        xGrid += gridFactor * 5;
    }
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
}

function clearCanvas()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
}



function drawCircle(radius)
{
    if (radius > 0)
    {
        var xPos = parseInt(canvas.width) / 2 / gridFactor;
        var yPos = parseInt(canvas.height) / 2 / gridFactor;

        c.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
        c.fillText("Radius = " + radius, gridFactor * (Math.round(radius) + Math.round(xPos)) + 10, yPos * gridFactor);
        
        c.beginPath();
        c.arc(xPos * gridFactor, yPos * gridFactor, radius * gridFactor, 0, 2* Math.PI , true);
        c.stroke();
    }
    else
        alert("Values must be non-negative, duh");
}


function drawRect(width, height)
{

    if (width < 0 || height < 0)
    {
        alert("Values must be non-negative, duh");
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


function drawTriangle(side1, side2, angle)
{
    alert("triangle");
    if (side1 === side2)
        alert("equal");
    alert(angle);
    c.strokeStyle = "black";
    c.strokeRect(0, 0, canvas.width, canvas.height);
    var side1 = parseInt(side1) * gridFactor;
    var side2 = parseInt(side2) * gridFactor;
    var angle = (parseInt(angle) % 360) * Math.PI / 180;
    //alert("sin  " + Math.round(Math.sin(angle)));
    //alert("cos  " + Math.round(Math.cos(angle)));
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
    //alert("X Average:" + xAve + " Y Average: " + yAve);

    var xOffset = (canvas.width / 2) - xAve;
    var yOffset = (canvas.height / 2) + yAve;
    //alert(xPos1 + " " + yPos1 + " " + xPos2 + " " + yPos2 + " " + xPos3 + " " + yPos3);    
    
    //alert("x: " + xOffset + " y: " + yOffset);

    xPos1 += xOffset;
    xPos2 += xOffset;
    xPos3 += xOffset;
    yPos1 += yOffset;
    yPos2 += yOffset;
    yPos3 += yOffset;
    
    //alert(xPos1 + " " + yPos1 + " " + xPos2 + " " + yPos2 + " " + xPos3 + " " + yPos3);    


    //Line
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    c.beginPath();
    c.moveTo(xPos1, yPos1);
    c.lineTo(xPos2, yPos2);
    c.lineTo(xPos3, yPos3);
    c.lineTo(xPos1, yPos1);
    c.strokeStyle = "black";  
    c.stroke();

    c.beginPath();
    c.arc(xPos1, yPos1, (xPos2 - xPos1) / 10, 2*Math.PI - angle, 0 , false);
    c.stroke();
}

function drawEllipse(majorRadius, minorRadius)
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    c.beginPath();
    c.ellipse(canvas.width / 2, canvas.height / 2, majorRadius * gridFactor, minorRadius * gridFactor, 0, 0, 2 * Math.PI, false);
    c.stroke();
}

console.log(canvas);