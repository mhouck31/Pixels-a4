var igUpload;

function preload(){
    igUpload = loadImage("drake.jpeg")
}

function setup(){
    createCanvas(igUpload.width,igUpload.height);
}

function draw(){
    background(0);
    image(igUpload,0,0);
    loadPixels();
    
    for(var row=0; row<height; row++){
        for(var col=0; col<width; col++){
            var index = (row * width + col)*4; 
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            if(keyIsPressed){
                if(key=="r"){
                    rainbow(index, col, row, g, a);
                }
                if(key=="1"){
                gloomygraveyard(index, g);
                }
                if(key=="2"){
                aqua(index, g, r, a);
                }
                if(key=="3"){
                cottoncandy(index,r,b,g,a);
                }
                if(key=="4"){
                blacksun(index,r/2,g/2,b/2,a);
                }
                if(key=="5"){
                chazzy(index,r*2,g*2,b*2,a);
                }
                if(key=="6"){
                Exposed(index, r, g,b,a);
                }
                if(key=="7"){
                grape(index, col, row, g, a);
                }
                if(key=="8"){
                Yellowpants(index, r, g, b, a);
                }
                if(key=="9"){
                Obscure(index, r, g, b, a);
                }
            }
        }
    }
    
    updatePixels();
}

function rainbow(index, col, row, g, a){
            pixels[index] = col;
            pixels[index + 1] = g;
            pixels[index + 2] = row;
            pixels[index + 3] = a;
}

function gloomygraveyard(index, g){
                if(key=="1"){
                pixels[index] = g;
                pixels[index + 1] = g;
                pixels[index + 2] = g;
                pixels[index + 3] = a;
                }
}

function aqua(index, g, r, a){
                if(key=="2"){
                pixels[index] = 0;
                pixels[index + 1] = g;
                pixels[index + 2] = r;
                pixels[index + 3] = a;
                }
}

function cottoncandy(index, r, b, g, a){
                if(key=="3"){
                pixels[index] = r;
                pixels[index + 1] = b;
                pixels[index + 2] = g;
                pixels[index + 3] = a;
                }
}

function blacksun(index, r, g, b, a){
                if(key=="4"){
                pixels[index] = r/2;
                pixels[index + 1] = g/2;
                pixels[index + 2] = b/2;
                pixels[index + 3] = a;
                }
}

function chazzy(index, r, g, b, a){
                if(key=="5"){
                pixels[index] = r*2;
                pixels[index + 1] = g*2;
                pixels[index + 2] = b*2;
                pixels[index + 3] = a;
                }
}

function Exposed(index, r, g, b, a){
                if(key=="6"){
                pixels[index] = 255 - r;
                pixels[index + 1] = 255 - g;
                pixels[index + 2] = 255 - b;
                pixels[index + 3] = a;
                }
}

function grape(index, row, col, g, a){
                if(key=="7"){
                pixels[index] = r + row - 190;
                pixels[index + 1] = g + col -190;
                pixels[index + 2] = b;
                pixels[index + 3] = a;
                }
}

function Yellowpants(index, r, g, b, a){
                if(key=="8"){
                pixels[index] = r + 190;
                pixels[index + 1] = g + 190;
                pixels[index + 2] = b;
                pixels[index + 3] = a;
                }
}

function Obscure(index, r, g, b, a){
                if(key=="9"){
                pixels[index] = r - 190;
                pixels[index + 1] = g + 60;
                pixels[index + 2] = b;
                pixels[index + 3] = a;
                }
}