var waitbgimg
var gameState="wait"



function preload(){
    waitbgimg=loadImage("assets/splashscreen1.gif")

}

function setup(){
createCanvas(windowWidth,windowHeight)

playButton = createImg("assets/button.png")
playButton.position(width/2 - 300,height-400)
playButton.size(500,300)


}
shds
function draw(){

    if (gameState==="wait"){
        background(waitbgimg)
    }



}