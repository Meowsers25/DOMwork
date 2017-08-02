//var body = document.querySelector("body");
var button = document.querySelector("button");
//var isPurple = false;
//
//button.addEventListener("click", function () {
//    if (isPurple) {
//        document.body.style.background = "white";
//        //isPurple = false;
//    } else {
//        document.body.style.background = "purple";
//        //isPurple = true;
//    }
//    isPurple = !isPurple;//use this instead of lines 8 & 11
//});

//you can also do this. Wayyyyy cleaner

button.addEventListener('click', function() {
    document.body.classList.toggle("purple");
});