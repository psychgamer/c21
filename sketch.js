var movingrec,fixedrec,rec1,rec2


function setup() {
  createCanvas(800,400);
  movingrec=createSprite(400, 200, 50, 50);
fixedrec=createSprite(300,100,50,50)
rec1=createSprite(200,200,50,50)
rec2=createSprite(500,200,50,50)
}

function draw() {
  background(55,5,25);
 movingrec.x=mouseX
 movingrec.y=mouseY
  
 console.log(movingrec.x - fixedrec.x)
 console.log(movingrec.width/2 + fixedrec.width/2)

  if (myistouching(movingrec,rec1)){
    movingrec.shapeColor="red";
   rec1.shapeColor="red";
  }
  else{
      movingrec.shapeColor="green";
     rec1.shapeColor="green";
  }

  drawSprites();



}

