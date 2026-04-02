console.log("Script started");

//Start the game
function start(){
    createSqauare(50);
    createSquare(80);
    createSquare();
    console.log(Math.random() * 1000);
}

//Create a square 
function createSquare(size){
    //Create an element
    let square = document.createElement("div");

    //Set new styles to make it a square
    square.style.backgroundColor = "red";
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.position = "absolute";
    square.style.top = "200px";
    square.style.left = getRandomX() + "px";

    //Add it to the page 
    document.body.appendChild(square);

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