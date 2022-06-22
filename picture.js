const sliderContainer = document.querySelector(".slider_container");
const sliderRight = document.querySelector(".right_slide");
const sliderLeft = document.querySelector(".left_slide");
const upButton = document.querySelector(".up_button");
const downButton = document.querySelector(".down_button");
const sliderLength = sliderRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  sliderRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
