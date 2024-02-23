var drumButtons = document.querySelectorAll(".drum")

for (button of drumButtons) {
    console.log(button);
    button.addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
});


function makeSound(key) {

    switch (key){
        case "i":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break; 
            
        case "d":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "j":
            var hihat = new Audio('sounds/hihatClosed.mp3');
            hihat.play();
            break; 

        case "k":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "l":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        default: console.log(key);
    }
}