function displayInputSquare(){
    document.getElementById("demo").innerHTML = "Input for square";
    hideAll();
    document.getElementById("side1s").className = "";
    document.getElementById("squarebtn").className = "";
}

function displayInputRectangle(){
    document.getElementById("demo").innerHTML = "Input for rectangle";
    hideAll();
    document.getElementById("side1r").className = "";
    document.getElementById("side2r").className = "";
    document.getElementById("btnRect").className = "";
}

function displayInputTriangle(){
    document.getElementById("demo").innerHTML = "Input for triangle";
    hideAll();
    document.getElementById("triside1").className = "";
    document.getElementById("triside2").className = "";
    document.getElementById("tri-angle").className = "";
    document.getElementById("btnTri").className = "";

}


function hideAll()
{
    document.getElementById("side1r").className = "hidden";
    document.getElementById("side2r").className = "hidden";
    document.getElementById("side1s").className = "hidden";
    document.getElementById("btnRect").className = "hidden";
    document.getElementById("squarebtn").className = "hidden";  
    document.getElementById("triside1").className = "hidden";
    document.getElementById("triside2").className = "hidden";
    document.getElementById("tri-angle").className = "hidden";
    document.getElementById("btnTri").className = "hidden";
}