var canvas=new fabric.Canvas('myCanvas');   //creating canvas element
player_x=10; //creating x value for player
player_y=10; //creating y value for player

block_image_width=30;    // setting width of the block image
block_image_height=30;   // setting the height of the block image

var player_object="";  // creating a variable for player object
var block_image_object="";  // creating a variable for image block

function player_update(){
    fabric.Image.fromURL("player.png", function(Img)
{
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}

// updating the player object 

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
// updating the block object

//class 87

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='66') {
        console.log("shift and b pressed together"); // checking if it is working or not
        block_image_width=block_image_width + 5;
        block_image_height= block_image_height + 5;
        document.getElementById("current_width").innerHTML=block_image_width; // displaying the  width value on the screen
        document.getElementById("current_height").innerHTML=block_image_height; // displaying the height value on the screen
    }

    if(e.shiftKey==true && keyPressed=='83') {
        console.log("shift and s pressed together");  // checking if it is working or not
        block_image_width=block_image_width - 5;
        block_image_height= block_image_height - 5;
        document.getElementById("current_width").innerHTML=block_image_width; // displaying the width value on the screen
        document.getElementById("current_height").innerHTML=block_image_height; // displaying the height value on the screen
    }

    // creating a function for the width and height of the block image

    // creating events for arrows when pressed

    if(keyPressed=='38') {
        up();
        console.log("up");  // press up arrow
    }

    if(keyPressed=='40') {
        down();
        console.log("down");  // press down arrow
    }

    if(keyPressed=='37') {
        left();
        console.log("left");  // press left arrow
    }

    if(keyPressed=='39') {
        right();
        console.log("right");  // press right arrow
    }

    // creating events for images ( blocks ) when pressed

    if(keyPressed=='67') {
        new_image('cloud.jpg');  // press shift+c together
        console.log("c");
    }

    if(keyPressed=='68') {
        new_image('dark_green.png'); // press shift+d together
        console.log("d");
    }

    if(keyPressed=='71') {
        new_image('ground.png'); // press shift+g together 
        console.log("g");
    }

    if(keyPressed=='76') {
        new_image('light_green.png'); // press shift+l together
        console.log("l");
    }

    if(keyPressed=='82') {
        new_image('roof.jpg');  // press shift+r together 
        console.log("r");
    }

    if(keyPressed=='84') {
        new_image('trunk.jpg');  // press shift+t together
        console.log("t");
    }

    if(keyPressed=='85') {
        new_image('unique.png');   // press shift+u together
        console.log("u");
    }

    if(keyPressed=='87') {
        new_image('wall.jpg');  // press shift+w together
        console.log("w");
    }

    if(keyPressed=='89') {
        new_image('yellow_wall.png');  // press shift+y together
        console.log("y");
    }

}

function up() {
    if(player_y>=0) {
        player_y= player_y-block_image_height;
        console.log(" block image height ="+block_image_height);
        console.log("When up arrow is pressed, X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y<=450) {
        player_y= player_y + block_image_height;
        console.log("block image height ="+block_image_height);
        console.log("When down arrow is pressed, X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_x>0) {
        player_x = player_x - block_image_width;
        console.log(" block image width ="+block_image_width);
        console.log(" When left arrow is pressed, X="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x<=820) {
        player_x = player_x + block_image_width;
        console.log(" block image width="+block_image_width);
        console.log("When right arrow is pressed, X ="+player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}