const sliderBar = document.querySelector(".slider-bar");

const sliderMinValue = sliderBar.min;

const sliderMaxValue = sliderBar.max;

let sliderValue = sliderBar.value;

const updateSliderBar = (event) => {
    sliderValue = sliderBar.value;
    sliderBar.style.background = `linear-gradient(to right, var(--full-slider-bar) 0%, var(--full-slider-bar) ${
    ((sliderValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
  }%, var(--empty-slider-bar-neutral) ${
    ((sliderValue - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
  }%, var(--empty-slider-bar-neutral) 100%)`;
};

export {
    sliderBar,
    sliderValue,
    updateSliderBar
}