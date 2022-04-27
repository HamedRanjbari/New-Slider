let $ = document;
let body = $.body;
let Image = $.querySelector(".main-img");
let rightArrow = $.querySelector(".right-arrow");
let leftArrow = $.querySelector(".left-arrow");
let groupImage = [
  { alt: "image-1", src: "img/fashion/1.jpg" },
  { alt: "image-2", src: "img/fashion/2.jpg" },
  { alt: "image-3", src: "img/fashion/3.jpg" },
  { alt: "image-4", src: "img/fashion/4.jpg" },
  { alt: "image-5", src: "img/fashion/5.jpg" },
  { alt: "image-6", src: "img/fashion/6.jpg" },
];
let idxNum = 0;

// click on button
rightArrow.addEventListener("click", rightArrowClick);
leftArrow.addEventListener("click", leftArrowClick);

// functions
function rightArrowClick() {
  idxNum++;
  if (idxNum > groupImage.length - 1) {
    idxNum = 0;
  }
  Image.src = groupImage[idxNum].src;
  body.style.backgroundImage = `url(${groupImage[idxNum].src})`;
}
function leftArrowClick() {
  idxNum--;
  if (idxNum < 0) {
    idxNum = groupImage.length - 1;
  }
  Image.src = groupImage[idxNum].src;
  body.style.backgroundImage = `url(${groupImage[idxNum].src})`;
}
