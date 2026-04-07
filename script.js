console.log("Script started");
let currentSize = 50;
//Start the game
function start(){
    createSquare(50, "light pink");
    createSquare(60, "light blue");
    createSquare(70, "light purple");
    console.log(Math.random() * 1000);
}

function updateTimer(){
    let timer = document.getElementById("Timer");
    timeLeft = timeLeft -1;
    timer.innerText = timeLeft + ""
}

//Create a square 
function createSquare(size, color){
    //Create an element (div)
    let square = document.createElement("div");

    //Set new styles to make it a square
    square.style.background = color;
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.top = "16px";
    square.style.left = getRandomX() + "px";

    //Add it to the page 
    document.body.appendChild(square);

    //Add click event 
    square.addEventListener("click", handleClick);

}

//Generate a random x coordinate 
function getRandomX(){
    let randX = Math.random() * window.innerWidth;
    return randX;
}

//Generate a random y coordinate
function getRandomY(){
    let randY = Math.random() * window.innerHeight;
    return randY;
}

//Handle the player clicking a square
function handleClick(event){
    let square = event.target;
    console.log(.square.style.width.);
    id (square.style.width == currentSize +  "px");
    console.log("first square");    
    square.remove();
    currentSize = currentSize + 18;
    //Make a size pattern 

}