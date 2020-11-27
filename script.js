window.onload = function(){

  console.log("Script loaded");

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


  const myCanvas = document.getElementById("canvas-meme");
  const myContext = myCanvas.getContext("2d");
  const img = new Image();
  img.src = "Img/1.jpg";
  img.onload = () => {
    context.drawImage(img, 0, 0)
  }



}
