var x = 0;
var y = 50;

function draw() {
    var canvas = document.getElementById("gameCanvas");
    var ctxt = canvas.getContext("2d");
    
    if((y+74) != canvas.height)
    {ctxt.clearRect(0, 0, canvas.width, canvas.height);
    ctxt.beginPath();
    ctxt.rect(x, y, 50, 75);
    ctxt.fillStyle = "black";
    ctxt.fill();
    ctxt.closePath();
    y++;}
    
    if((y+74) == canvas.height && (x+49) != canvas.width){
    ctxt.clearRect(0, 0, canvas.width, canvas.height);
    ctxt.beginPath();
    ctxt.rect(x, y, 50, 75);
    ctxt.fillStyle = "black";
    ctxt.fill();
    ctxt.closePath();
    x++;}

    if((y+74) == canvas.height && (x+49) == canvas.width){
        ctxt.clearRect(0, 0, canvas.width, canvas.height);
        ctxt.beginPath();
        ctxt.rect(x, y, 50, 75);
        ctxt.fillStyle = "black";
        ctxt.fill();
        ctxt.closePath();
        x--;}


    
}

setInterval(draw, 10);
    