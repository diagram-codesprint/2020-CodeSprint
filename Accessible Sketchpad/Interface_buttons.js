// Rohan Skariah 
// Tangia Sun
// Ryan Teoh 
// Justin Wong 

function tributton() {
    document.getElementById("conicinterface").className = "hidden";
    document.getElementById("quadinterface").className = "hidden";
    document.getElementById("triinterface").className = "visible";
    c.clearRect(0, 0, canvas.width, canvas.height);
}
function displayInputScaleneTri() {
    document.getElementById("scalenetriinterface").className = "visible";
    document.getElementById("equaltriinterface").className = "hidden";
    c.clearRect(0, 0, canvas.width, canvas.height);
}
function displayInputEqualTri() {
    document.getElementById("scalenetriinterface").className = "hidden";
    document.getElementById("equaltriinterface").className = "visible";
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function quadbutton() {
    document.getElementById("conicinterface").className = "hidden";
    document.getElementById("triinterface").className = "hidden";
    document.getElementById("quadinterface").className = "visible";
    c.clearRect(0, 0, canvas.width, canvas.height);
}
function displayInputSquare() {
    document.getElementById("rectinterface").className = "hidden";
    document.getElementById("sqinterface").className = "visible";
    c.clearRect(0, 0, canvas.width, canvas.height);
}
function displayInputRectangle() {
    document.getElementById("sqinterface").className = "hidden";
    document.getElementById("rectinterface").className = "visible";
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function conicButton() {
    document.getElementById("triinterface").className = "hidden";
    document.getElementById("quadinterface").className = "hidden";
    document.getElementById("conicinterface").className = "visible";
    c.clearRect(0, 0, canvas.width, canvas.height);
}
function displayInputCircle() {
    document.getElementById("circinterface").className = "visible";
    document.getElementById("ellipseinterface").className = "hidden";
    c.clearRect(0, 0, canvas.width, canvas.height);
}
function displayInputEllipse() {
    document.getElementById("circinterface").className = "hidden";
    document.getElementById("ellipseinterface").className = "visible";
    c.clearRect(0, 0, canvas.width, canvas.height);
}