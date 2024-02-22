var drumButtons = document.querySelectorAll(".drum")

for (button of drumButtons) {
    button.addEventListener("click", function() {

        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        
    });
}