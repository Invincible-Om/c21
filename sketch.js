
var canvas;
var music;
var redBase,blueBase,yellowBase,greenBase;
var box;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redBase=createSprite(100,580,180,20);
   redBase.shapeColor= "red";
    yellowBase=createSprite(300,580,180,20);
    yellowBase.shapeColor= "yellow";
    blueBase=createSprite(500,580,180,20);
    blueBase.shapeColor= "blue"
    greenBase=createSprite(700,580,180,20);
    greenBase.shapeColor= "green";


    //create box sprite and give velocity
    box=createSprite(400,300,50,50)
    box.shapeColor="white";
    box.setVelocity(2,5)
    

}


function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

  edges= createEdgeSprites();
   box.bounceOff(edges);
    // box.bounceOff(blueBase)
    // box.bounceOff(redBase)
    // box.bounceOff(greenBase)
    // box.bounceOff(yellowBase)

    if(box.isTouching(redBase)){
        box.shapeColor="red";
       box.bounceOff(redBase);
    }

    if(box.isTouching(blueBase)){
        box.shapeColor="blue";
        box.bounceOff(blueBase);
    }

    if(box.isTouching(yellowBase)){
        box.shapeColor="yellow";
        box.setVelocity(0,0);
        music.stop();

       
    }

    if(box.isTouching(greenBase)){
        box.shapeColor="green";
        box.bounceOff(greenBase);
        music.play();
    }

    

    //add condition to check if box touching surface and make it box
    drawSprites();
    
}
