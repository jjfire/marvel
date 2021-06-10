var canvas = new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object= "";

function player_update()
{
    fabric.Image.fromURL("Black-Panther.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
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

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=="80"){
        console.log("shift and p are pressed together");
        block_image_width=block_image_width+ 10;
        block_image_height=block_image_height+ 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keypressed=="77"){
        console.log("shift and m are pressed together");
        block_image_width=block_image_width- 10;
        block_image_height=block_image_height- 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=="38"){
        up();
        console.log("up key is pressed");
    }
    if(keypressed=="40"){
        down();
        console.log("down key is pressed");
    }
    if(keypressed=="37"){
        left();
        console.log("left key is pressed");
    }
    if(keypressed=="39"){
        right();
        console.log("right key is pressed");
    }
    if(keypressed=="87"){
        new_image('hulk.png');
        console.log("w key is pressed");
    }
    if(keypressed=="71"){
        new_image('uju.PNG');
        console.log("g key is pressed");
    }
    if(keypressed=="76"){
        new_image('Captureghj.PNG');
        console.log("l key is pressed");
    }
    if(keypressed=="84"){
        new_image('Capturejr.PNG');
        console.log("t key is pressed");
    }
    if(keypressed=="82"){
        new_image('Capturej.PNG');
        console.log("r key is pressed");
    }
    
}

function up(){
    if (player_y >= 0)
    {
        player_y= player_y- block_image_height;
        console.log("block image height= " +block_image_height);
        console.log("when up is pressed x="+player_x+ " y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y <= 500)
    {
        player_y= player_y+ block_image_height;
        console.log("block image height= " +block_image_height);
        console.log("when down is pressed x="+player_x+ " y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x > 0)
    {
        player_x= player_x- block_image_width;
        console.log("block image width= " +block_image_width);
        console.log("when left is pressed x="+player_x+ " y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <= 850)
    {
        player_x= player_x+ block_image_width;
        console.log("block image width= " +block_image_width);
        console.log("when right is pressed x="+player_x+ " y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}