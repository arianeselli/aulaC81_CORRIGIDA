
var lastPositionX, lastPositionY;

color = "black";

canvas = document.getElementById("myCanvas"); // nome do id estava incorreto
ctx = canvas.getContext("2d");
var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if(width<992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e){
    console.log("myTouchStart");
    color = document.getElementById("color").value; // nome do document estava incorreto
    widthOfLine = document.getElementById("width_of_line").value;
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY= e.touches[0].clientY - canvas.offsetTop; // erro de digitação
}
canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove (e){
    console.log("myTouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =  widthOfLine; // estava referenciando a variável errada, logo não estava atualizando a espessura do desenho

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionOfX + "y = "
            + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + currentPositionOfTouchX + "y = "
            + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX,
            currentPositionOfTouchY);
        ctx.stroke();
        lastPositionOfX = currentPositionOfTouchX; // Estavam referenciando variáveis incorretas
        lastPositionOfY = currentPositionOfTouchY; // Estavam referenciando variáveis incorretas
}


function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


canvas.addEventListener("mouseup", myMouseUp); function myMouseUp(e) { mouseEvent = "mouseUP"; } 

canvas.addEventListener("mouseleave", myMouseLeave); function myMouseLeave(e) { mouseEvent = "mouseleave"; }



//o miguel e lindo