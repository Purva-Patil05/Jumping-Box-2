var canvas;
var music;
var box1,box2,box3,box4
var ball
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1=createSprite(100,580,200,30)
    box1.shapeColor="red";
    box2=createSprite(300,580,200,30)
    box2.shapeColor="pink";
    box3=createSprite(500,580,200,30)
    box3.shapeColor="blue";
    box4=createSprite(700,580,200,30)
    box4.shapeColor="orange";


    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="white";
    ball.velocityX=14
    ball.velocityY=14
}

function draw() {
    background(rgb(169,169,169));

    edges=createEdgeSprites()
    ball.bounceOff(edges)
    



    //add condition to check if box touching surface and make it box
    if(ball.isTouching(box1)){
        ball.bounceOff(box1)
        ball.shapeColor="red"
        music.play();
    }
    if(ball.isTouching(box2)){
        ball.bounceOff(box2)
        ball.shapeColor="pink"
        
    }if(ball.isTouching(box3)){
        ball.velocityX=0
        ball.velocityY=0
        ball.shapeColor="blue"
        music.stop();
    }if(ball.isTouching(box4)){
        ball.bounceOff(box4)
        ball.shapeColor="orange"

    }
    drawSprites();
}
