// Detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  // check which button got pressed
  var buttonInnerHTML = this.innerHTML;
  // and send it to the function which is in charge of button sounds

  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

});


} 
// Detecting keyboard press (from the entire document, not only the elements):

document.addEventListener("keydown", function (event) {
  
    makeSound(event.key);
    buttonAnimation(event.key);

});

// Function whis is referred to in the event listeners. Function in charge of making the sounds
function makeSound (key) {
   
  switch (key) {

    case "w":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
      break;

    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;

    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    default:
      console.log("Something went wrong?");
      break;
  }
}

//Function in charge of showing an animation when an element is clicked or keyboard clicked

function buttonAnimation (currentKey) {

  var activeButton = document.querySelector("." + currentKey);

 // Add a class from CSS to a element
  activeButton.classList.add("pressed");
 
  // palauttaa alkuperäisen classin kuvaan pienen viiveen jälkeen:
  setTimeout(function(){
    
    activeButton.classList.remove("pressed");

    /// odotusaika:
    }, 100);

}



