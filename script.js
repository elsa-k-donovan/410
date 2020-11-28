

window.onload = function(){

  console.log("Script loaded");

  var canvas = document.getElementById("canvas-meme");
  var context = canvas.getContext("2d");


  const img = new Image();
  img.src = "Img/1.jpg";
  img.onload = () => {
    context.drawImage(img, 0, 0);
  }


//Added after to resize image to correct size

img.onload = function () {

    // set size proportional to image
    canvas.height = canvas.width * (img.height / img.width);

    // step 1 - resize to 50%
    var oc = document.createElement('canvas'),
        octx = oc.getContext('2d');

    oc.width = img.width * 0.5;
    oc.height = img.height * 0.5;
    octx.drawImage(img, 0, 0, oc.width, oc.height);

    // step 2
    octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);

    // step 3, resize to final size
    context.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
    0, 0, canvas.width, canvas.height);
}//Resizing image







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
