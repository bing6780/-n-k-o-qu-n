const carousel = document.getElementById("carousel");

let angle = 0;
let running = true;

function rotateLantern(){

    if(running){
        angle += 0.5;
        carousel.style.transform =
        `rotateY(${angle}deg)`;
    }

    requestAnimationFrame(rotateLantern);
}

rotateLantern();

const images = document.querySelectorAll(".face");

images.forEach(img=>{

    img.addEventListener("mouseenter",()=>{
        running=false;
    });

    img.addEventListener("mouseleave",()=>{
        running=true;
    });

});
