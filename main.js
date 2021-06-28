var mouseevent = "";
var last_pos_x, last_pos_y;

var canvas = document.getElementById("myCanvas");
var cntx = canvas.getContext("2d");

color = "Black";
width_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_line = document.getElementById("line_width").value;

    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        cntx.beginPath();
        cntx.strokeStyle = color;
        cntx.lineWidth = width_line;

        console.log("last positon of X and Y = ");
        console.log("x= " + last_pos_x + " y=" + last_pos_y);

        cntx.moveTo(last_pos_x, last_pos_y);

        console.log("current positon of X and Y = ");
        console.log("x= " + current_pos_x + " y=" + current_pos_y);

        cntx.lineTo(current_pos_x, current_pos_y);
        cntx.stroke();
    }
    last_pos_x = current_pos_x;
    last_pos_y = current_pos_y;
}