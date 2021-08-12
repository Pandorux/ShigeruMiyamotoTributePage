
let galleryIndex = 0;
const miyamotoImages = [
    "images/Miyamoto_Signature.jpg",
    "images/Shigeru_Miyamoto.jpg",
    "images/Miyamoto_Professional.jpg",
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

