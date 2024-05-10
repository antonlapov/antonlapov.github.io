let ii = 0;
let rodSize = 40;


function setup(){
    createCanvas(displayWidth, displayHeight);
    rectMode(CENTER);
    frameRate(160);
    let b = createButton("yo");
    b.size(40);
    b.position(width/2, height/2);
   
}

function draw(){
    background(205);
    

    for (let i = 0; i < width+rodSize; i += rodSize) {
        for(let j = 0; j < height+rodSize; j += rodSize){
            push();
            translate(i, j);
            rotate(noise((frameCount+i)*0.0003, (frameCount+j)*0.0002, (i+j)* 0.00023)*360);
            rect(0,0,7,rodSize);
            pop();

        }
        //const element = array[i];
        
    }


    
    
}