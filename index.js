var drumButtons = document.querySelectorAll(".drum")

for (button of drumButtons) {
    button.addEventListener("click", function() {
        alert("I got clicked");
    });
}