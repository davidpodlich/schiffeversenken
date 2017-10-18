function showAnswer(eventObj) {
    var image = eventObj.target;

    var name = image.id;
    name = name + ".jpg";
    image.src = name
}
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
    var image0 = document.getElementById("zero");
    image0.onclick = showImageZero;
    var image1 = document.getElementById("one");
    image1.onclick = showImageOne;
    var image2 = document.getElementById("two");
    image2.onclick = showImageTwo;
    var image3 = document.getElementById("three");
    image3.onclick = showImageThree;
    var image4 = document.getElementById("four");
    image4.onclick = showImageFour;
    var image5 = document.getElementById("five");
    image5.onclick = showImageFive;

}
function showImageZero() {
    var image = document.getElementById("zero");
    image.src = "zero.jpg";
}
function showImageOne() {
    var image = document.getElementById("one");
    image.src = "one.jpg";
}
function showImageTwo() {
    var image = document.getElementById("two");
    image.src = "two.jpg";
}
function showImageThree() {
    var image = document.getElementById("three");
    image.src = "three.jpg";
}
function showImageFour() {
    var image = document.getElementById("four");
    image.src = "four.jpg";
}
function showImageFive() {
    var image = document.getElementById("five");
    image.src = "five.jpg";
}
window.onload = init;


























