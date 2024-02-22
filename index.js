var drumButtons = document.querySelectorAll(".drum")

for (button of drumButtons) {
    console.log(button);
    button.addEventListener("click", function() {
        

        if (this.classList.contains("i")) {
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        }

        else if (this.classList.contains("a")) {
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }

        else if (this.classList.contains("d")) {
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        }

        else if (this.classList.contains("j")) {
            var audio = new Audio('sounds/hihatClosed.mp3');
            audio.play();
        }
        
        else if (this.classList.contains("k")) {
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }

        else if (this.classList.contains("l")) {
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
    });
}