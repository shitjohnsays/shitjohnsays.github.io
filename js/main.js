var imgs = {
    "fabulous": 3,
    "hungry": 0,
    "judgingyou": 0,
    "lingerie": 0,
    "matter": 1,
    "norachel": 2,
    "wtfhilarie": 2
}


$(document).ready(function() {
    reset();

    // Add listener to reset after playing
    var audio = document.getElementById("audio");
    audio.addEventListener("ended", function(){
         audio.currentTime = 0;
         reset();
    });

})

/* Returns the file name of a new random image */
function getNewRandomImage(currentImg) {
    var rand = Math.floor(Math.random() * Object.keys(imgs).length);
    var img = Object.keys(imgs)[rand];

    var n = Math.floor(Math.random() * (imgs[img] + 1));
    if (img + "-" + n == currentImg) {
        n = (n + 1) % imgs[img];
    }
    return img + "-" + n;
}

/* Returns the current image filename or "" */
function parseCurrentImg() {
    var str = $("#image").css("background");
    if (str.split(".jpg").length == 1) {
        return "";
    }
    return str.split(".jpg")[0].split("images/")[1];
}


function reset() {
    // New image
    $("#image").css("height", $(window).height());
    var img = getNewRandomImage(parseCurrentImg());
    $("#image").css("background", "url('images/" + img + ".jpg')");

    // New sound
    document.getElementById("audio").src = "sounds/" + img.split("-")[0] + ".wav";

    // Show play button
    $("#image img").show();
}

function play() {
    // Play audio
    var audio = document.getElementById("audio");
    audio.play();

    // Hide play button
    $("#image img").hide();
}
