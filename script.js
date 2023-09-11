let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let numhearts = canvas.width;
let hearts = [];
let speed = 3;
let centerx = canvas.width / 2;
let centery = canvas.height / 2;

for(let i =0; i<numhearts; i++){
    hearts[i] = new heart();
}

function heart(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.z = Math.random()*canvas.height;
    this.color = Math.random()*360;
    this.move = function(){
        this.z = this.z + speed;
        if(this.z >= canvas.height){
            this.z = 0;
        }
    }
        this.show = function(){
            let x, y, s, color;
            x = (this.x - centerx) * (canvas.width/this.z);
            x = x + centerx;
            y = (this.y - centery) * (canvas.width/this.z);
            y = y + centery;
            s = 1.5 * (canvas.width / this.z);
            context.beginPath();
            context.strokeStyle = "hsl("+this.color+",100%,50%)";
            context.arc(x, y, s, 0, Math.PI);
            context.lineWidth = 2 * s;
            context.lineCap = "round";
            context.stroke();
        }
    }

function draw(){
    context.fillStyle = "#000"  ;
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let i=0; i<numhearts; i++){
        hearts[i].show();
        hearts[i].move();
    }
    requestAnimationFrame(draw) || webkitRequestAnimationFrame(draw) || mozRequestAnimationFrame(draw) || oRequestAnimationFrame(draw) || msRequestAnimationFrame(draw);
}

requestAnimationFrame(draw) || webkitRequestAnimationFrame(draw) || mozRequestAnimationFrame(draw) || oRequestAnimationFrame(draw) || msRequestAnimationFrame(draw);