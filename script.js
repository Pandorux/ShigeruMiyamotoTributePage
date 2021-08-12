
let galleryIndex = 0;
const d = new Date();
const miyamotoImages = [
    "images/Miyamoto_Signature.jpg",
    "images/Shigeru_Miyamoto.jpg",
    "images/Miyamoto_Luigi.jpg",
    "images/Miyamoto_Mario.png",
    "images/Miyamoto_Fun.jpg",
    "images/Miyamoto_Professional.jpg",
    "images/Miyamoto_Preso.jpg",
];

function galleryImageChange(changeRight) {
    galleryIndex = changeRight ? galleryIndex + 1 : galleryIndex - 1;

    if(galleryIndex < 0) {
        galleryIndex = miyamotoImages.length;
    } else if (galleryIndex > miyamotoImages.length) {
        galleryIndex = 0;
    }
}

$("#image").attr("src", miyamotoImages[galleryIndex]);

$("#gallery-left-button").on("click", function() {
    galleryImageChange(false);
    $("#image").attr("src", miyamotoImages[galleryIndex]);
});

$("#gallery-right-button").on("click", function() {
    galleryImageChange(true);
    $("#image").attr("src", miyamotoImages[galleryIndex]);
});

