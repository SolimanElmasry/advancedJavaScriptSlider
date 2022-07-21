let imgArr = Array.from(document.querySelectorAll(".img-box img")),
  imgArrLen = imgArr.length,
  currentImg = 1,
  imgNum = document.getElementById("imgNum"),
  nextBt = document.getElementById("next"),
  prevBt = document.getElementById("prev");

  nextBt.onclick = () => {
    if (nextBt.classList.contains("dis")) {
      console.log("hoi");
    } else {
      currentImg++;
      checker();
    }
  };
  prevBt.onclick = () => {
    if (prevBt.classList.contains("dis")) {
      console.log("hoi");
    } else {
      currentImg--;
      checker();
    }

}
checker();
function checker() {
  imgNum.textContent = "img " + currentImg + " of " + imgArrLen;
  removeActive();
  imgArr[currentImg - 1].classList.add("active");

  currentImg == 1
    ? prevBt.classList.add("dis")
    : prevBt.classList.remove("dis");

  currentImg == imgArrLen
    ? nextBt.classList.add("dis")
    : nextBt.classList.remove("dis");
}
function removeActive() {
  imgArr.forEach((img) => {
    img.classList.remove("active");
  });
 
}