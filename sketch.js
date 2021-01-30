var backgroundImage, goonImage, knightImage, motorcycle_img;



function preload() {
    backgroundImage = loadImage("images/back.png");
    goonImage = loadImage("images/goon.png");
    knightImage = loadImage("images/Knight.png");
    motorcycle_img = loadImage("images/motorcycle.png");

}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);

    backgr = createSprite(950,400,10,10);
    backgr.addImage(backgroundImage);
    backgr.scale=1.5;
 

}

function draw() {
 background("white")
    backgr.velocityX=-3;
    if(backgr.x<200) {
    backgr = createSprite(950,500,10,10);
    backgr.addImage(backgroundImage);
    backgr.scale=2;
    }
   

    drawSprites();

}


