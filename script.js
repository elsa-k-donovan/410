

window.onload = function(){

  console.log("Script loaded");

  // var myCanvas = document.getElementById("canvas-meme");
  // var context = myCanvas.getContext("2d");
  // var img = new Image();


  // img.onload = () => {
  //   context.drawImage(img, 0, 0);
  // }


//Added after to resize image to correct size

// img.onload = function () {
//
//     // set size proportional to image
//     myCanvas.height = myCanvas.width * (img.height / img.width);
//
//     // step 1 - resize to 50%
//     var oc = document.createElement('canvas'),
//         octx = oc.getContext('2d');
//
//     oc.width = img.width * 0.5;
//     oc.height = img.height * 0.5;
//     octx.drawImage(img, 0, 0, oc.width, oc.height);
//
//     // step 2
//     octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
//
//     // step 3, resize to final size
//     // context.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
//     // 0, 0, canvas.width, canvas.height);
//
//     context.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
//     0, 0, myCanvas.width, myCanvas.height);
//
// }//Resizing image

// img.src = "Img/Liberal/71861457_136697787684472_8301576268772540416_n.jpg";


//New resizing algorithm without quality loss
function directResize() {
img = new Image();
    img.src = "Img/Liberal/72202488_137507804270137_6306651693077495808_n.jpg";

    img.onload = () => {

			var directCanvas = document.getElementById("canvas-meme");
			var directCanvasContext = directCanvas.getContext("2d");

      var canvas4 = document.createElement('canvas'),
      canvas4context = canvas4.getContext('2d');

      //Adding


      canvas4.width = img.width * 0.5;
      canvas4.height = img.height * 0.5;
      canvas4context.drawImage(img, 0, 0, canvas4.width, canvas4.height);


      //

			directCanvas.width = canvas4.width;
			directCanvas.height = canvas4.height;

			//	Set original canvas size
			directCanvasContext.drawImage(img, 0, 0, directCanvas.width,
																		directCanvas.height);

			// Now use target canvas, to hold the final image, and output image from it
		} // End of the img.onLoad
}

// function resizingCanvas() {
//  		img = new Image();
//     img.src = "Img/Liberal/71861457_136697787684472_8301576268772540416_n.jpg";
//
//     img.onload = () => {
//
// 		// Now for the efficient loop solution
// 		var resizingCanvas = document.getElementById("loopcanvas");
// 		var resizingCanvasContext = resizingCanvas.getContext("2d");
//
//     resizingCanvas.width = img.width;
//     resizingCanvas.height = img.height;
//
//     // Draw the image on the temp resizing canvas
//     resizingCanvasContext.drawImage(img, 0, 0, resizingCanvas.width, resizingCanvas.height);
//
// 		var width = 200;
// 		var height = width * (img.height / img.width);
//
// 		var curWidth = img.width;
// 		var curHeight = img.height;
//
//     // Quickly reduce the dize by 50% each time in few itterations until the size is less then
//     // 2x time the target size - the motivation for it, is to reduce the aliasing that would have been
//     // created with direct reduction of very big image to small image
//      while (curWidth * 0.5 > width) {
//      		// Reduce the resizing canvas by half and refresh the image
//         halfWidth = Math.floor(curWidth * 0.5);
//         halfHeight = Math.floor(curHeight * 0.5);
//
//         resizingCanvasContext.drawImage(resizingCanvas, 0, 0, curWidth, curHeight, 0, 0, halfWidth, halfHeight);
//
// 		  	curWidth = halfWidth
//    		  curHeight = halfHeight;
//      }
//
// 		// Now do fineal resize for the resizingCanvas to meet the dimension requirments
// 		resizingCanvasContext.drawImage(resizingCanvas, 0, 0, curWidth, curHeight, 0, 0, width, height);
//
// 	  // Now use target canvas, to hold the final image, and output image from it
// 	} // End of the img.onLoad
// }
//
// stepByStepResize();
directResize();
// resizingCanvas();



////////

  select("blue-state");
  select("red-state");
  select("default-state");

  var granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 800,
    states : {
        "default-state": {
            gradients: [
                ['#c1a7a7', '#cabde6'],
                ['#985959', '#8c96ff'],
                ['#6d5998', '#e9a2a2']
            ],
            transitionSpeed: 10000
        },
        "blue-state": {
            gradients: [
                ['#34315e', '#93cfec'],
                ['#13325b', '#8cc7da']
            ],
            transitionSpeed: 10000
        },
        "red-state": {
            gradients: [
                        ['#571d30', '#d1b5ba'],
                        ['#861414', '#e6bdd2']
            ],

            loop:false
          }
    }
});




  function select(buttonId){
      var select = document.getElementById(buttonId);

      select.addEventListener("click", function(){
        if(buttonId === "blue-state"){
          console.log("Left Clicked");
          granimInstance.changeState("blue-state");
        }
        else if(buttonId === "default-state"){
          console.log("Generate");
          granimInstance.changeState("default-state");

        }
        else if(buttonId === "red-state"){
          console.log("Right Clicked");
          granimInstance.changeState("red-state");
        }
      });
  }













}
