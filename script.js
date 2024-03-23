var button = document.getElementById("btn2");
var colors = ["red", "blue", "green", "yellow", "black"];
var currentIndex = 0;

button.addEventListener("click", function() {
    button.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});
