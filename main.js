canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverhieght=100;
roverwidth=100;
roverX=10;
roverY=10;
backgroundimg="mars.jpg";
roverimg="rover.png";
function add(){
    backgroundimgTag=new Image();
    backgroundimgTag.onload=uploadBackround;
    backgroundimgTag.src=backgroundimg;
    roverimgTag=new Image();
    roverimgTag.onload=uploadRover;
    roverimgTag.src=roverimg;
}
function uploadBackround(){
    ctx.drawImage(backgroundimgTag,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(roverimgTag,roverX,roverY,roverwidth,roverhieght);
}
window.addEventListener("keydown",keyDown);
function keyDown(e){
keypress=e.keyCode;
console.log(keypress);
if (keypress=="40"){
    down();
}
if (keypress=="39"){
    right();
}
if (keypress=="38"){
    up();
}
if (keypress=="37"){
    left();
}
}
function up(){
    if (roverY>=0){
        roverY==roverY-10;
        uploadBackround();
        uploadRover();
    }
}
function down(){
    if (roverY<=500){
        roverY==roverY+10;
        uploadBackround();
        uploadRover();
    }
}
function left(){
    if (roverX>=0){
        roverX==roverX-10;
        uploadBackround();
        uploadRover();
    }
}
function right(){
    if (roverX<=700){
        roverX==roverX+10;
        uploadBackround();
        uploadRover();
    }
}