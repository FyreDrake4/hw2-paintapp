let squareSize = 40;
let colorsArray;
let drawColor = "white";
let dragging = -1;
// let pMouseX = 0;
// let pMouseY = 0;

function setup() {
    createCanvas(1200, 800);
    background(250);
    colorMode(HSB);
    colorsArray = [
        new ColorSelector(2, 2 + (squareSize + 2) * 0, squareSize, "red"),
        new ColorSelector(2, 2 + (squareSize + 2) * 1, squareSize, "orange"),
        new ColorSelector(2, 2 + (squareSize + 2) * 2, squareSize, "yellow"),
        new ColorSelector(2, 2 + (squareSize + 2) * 3, squareSize, "lime"),
        new ColorSelector(2, 2 + (squareSize + 2) * 4, squareSize, "cyan"),
        new ColorSelector(2, 2 + (squareSize + 2) * 5, squareSize, "blue"),
        new ColorSelector(2, 2 + (squareSize + 2) * 6, squareSize, "magenta"),
        new ColorSelector(
            2,
            2 + (squareSize + 2) * 7,
            squareSize,
            "saddlebrown"
        ),
        new ColorSelector(2, 2 + (squareSize + 2) * 8, squareSize, "white"),
        new ColorSelector(2, 2 + (squareSize + 2) * 9, squareSize, "black"),
    ];
}

function draw() {
    for (let i = 0; i < colorsArray.length; i++) {
        colorsArray[i].draw();
    }
}

function mousePressed() {
    // checks each color for if inside it
    dragging = 1;
    for (let i = 0; i < colorsArray.length; i++) {
        colorsArray[i].mousePressed();
    }
}

function mouseDragged() {
    //drawing
    if (dragging) {
        strokeWeight(10);
        stroke(drawColor);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function mouseReleased() {
    //stops the color when you release
    dragging = -1;
}

class ColorSelector {
    //Class for the different colors on the left
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw() {
        noStroke();
        fill(this.color);
        square(this.x, this.y, this.size); //draws the palatte
    }

    mousePressed() {
        //checks which color you are inside
        let insideX = mouseX >= this.x && mouseX <= this.x + this.size;
        let insideY = mouseY >= this.y && mouseY <= this.y + this.size;

        let inside = insideX && insideY;

        if (inside) {
            drawColor = this.color;
        }
    }
}
