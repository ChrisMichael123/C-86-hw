var canvas = new fabric.Canvas('mine');
 var x= document.getElementById("myAudio");

function new_image()

{
	fabric.image.fromURL ("BithdayImage.jpg", function (Img){
        block_object=Img;
        block_object.scaletoWidth(700);
        block_object.scaletoHeight(510);
        block_object.set({
            top:0,
            left:0

    });
    canvas.add(block_object)
    });	
}
function playSound (){
    x.play();
}

