//初期化
const images = document.querySelectorAll(".slide img"); //グローバル変数
const slide = document.querySelector(".slide");
console.log(images[images.length - 1]); //4番目の画像が欲しい

//div="slide"の中の最後の画像[images.lenght-1]を最初の画像[0]の前
//insertBeforeはappendChildの逆、前に入れる
slide.insertBefore(images[images.length - 1], images[0]);
// images[images.length - 1].style.marginLeft = "-100%";

//button 左
const leftBtn = document.querySelector(".leftBtn");

const leftSlider = function () {
    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");
    slideImages[0].style.marginLeft = "0"

    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
}
console.log(images);

leftBtn.addEventListener("click", function () {


    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");
    slideImages[0].style.marginLeft = "0"

    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
});

//button 右
const rightBtn = document.querySelector(".rightBtn");

const rightSlider = function () {
    const slideImages = document.querySelectorAll(".slide img"); //グローバル変数
    slide.appendChild(slideImages[0]);
    slideImages[1].removeAttribute("style");
}

rightBtn.addEventListener("click", function () {
    const slideImages = document.querySelectorAll(".slide img"); //グローバル変数
    slide.appendChild(slideImages[0]);
    slideImages[1].removeAttribute("style");
});
