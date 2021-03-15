import {
    priceBilling,
    switchToggle,
    toggle
} from '../../toggle/js/toggle.mjs';

import {
    sliderBar,
    sliderValue,
    updateSliderBar
} from '../../slider/js/slider.mjs';

const priceAmount = document.querySelector(".amount");
const priceDuration = document.querySelector(".duration");

const priceListings = [{
        key: 1,
        monthlyPrice: "$8.00",
        yearlyPrice: "$72.00"
    },
    {
        key: 2,
        monthlyPrice: "$16.00",
        yearlyPrice: "$144.00"
    },
    {
        key: 3,
        monthlyPrice: "$24.00",
        yearlyPrice: "$216.00"
    },
];
let currentPriceListing = priceListings[0];

const updatePrice = (sliderValue) => {
    currentPriceListing = priceListings.find(
        (priceListing) => priceListing.key == sliderValue
    );
};

const displayPrice = () => {
    let currentPrice;
    if (priceBilling == "monthly") {
        currentPrice = currentPriceListing.monthlyPrice;
        priceDuration.textContent = " / month";
    } else if (priceBilling == "yearly") {
        currentPrice = currentPriceListing.yearlyPrice;
        priceDuration.textContent = "year";
    }
    priceAmount.textContent = currentPrice;
};

displayPrice();


toggle.addEventListener("click", (event) => {
    switchToggle();
    displayPrice();
});


sliderBar.addEventListener("input", (event) => {
    updateSliderBar();
    updatePrice(sliderValue);
    displayPrice();
});



export {
    priceListings
}