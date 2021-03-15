# Interactive_pricing_comp
Frontend Mentor - Interactive pricing component solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot
![](../screenshots/desktop-screenshot.jpg)
![](../screenshots/mobile-screenshot.jpg)

### Links

- Solution URL: [Interactive Price Component](https://github.com/Morkachukzy/Interactive_pricing_comp)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use modular CSS and ES6 modules to a great extent. I also found out features of the HTML/CSS markup that i was quite unfamiliar with such as "input[type="range"] and how to style it modularly

```html
<div class="slider">
  <input type="range" class="slider-bar" min="1" max="3" value="1" steps="1">
</div>
```
```css
.slider {
    margin: 3em auto;
}

.slider-bar {
  appearance: none;
  width: 85%;
  height: 7px;
  border-radius: 3em;
  background-color: var(--empty-slider-bar-neutral);
  outline: none;
  border: none;
}

.slider-bar::-webkit-slider-thumb {
  appearance: none;
  height: 3.3em;
  width: 3.3em;
  border-radius: 200em;
  background: var(--slider-bg) url("../images/icon-slider.svg") center center/1.8em no-repeat;
  cursor: pointer;
  color: #dee2e6;
  box-shadow: 0 15px 20px 5px var(--full-slider-bar);
}

.slider-bar::-webkit-slider-thumb:hover {
  background-color: var(--full-slider-bar);
}
```
```js
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
```

### Useful resources

- [CodingFlag Range Styling](https://www.youtube.com/watch?v=px9Ch15jo-E&t=7s) - This helped me style the slider to my taste. I really liked this pattern and will use it going forward.


## Author

- Frontend Mentor - [@Morkachukzy ](https://www.frontendmentor.io/profile/Morkachukzy)
- Twitter - [@chukamorka](https://www.twitter.com/chukamorka)
