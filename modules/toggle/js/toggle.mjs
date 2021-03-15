const toggle = document.querySelector(".toggle");

let priceBilling = "monthly";

const switchToggle = () => {
    switch (priceBilling) {
        case "monthly":
            toggle.classList.remove("is-toggle-monthly");
            toggle.classList.add("is-toggle-yearly");
            priceBilling = "yearly";
            break;

        case "yearly":
            toggle.classList.remove("is-toggle-yearly");
            toggle.classList.add("is-toggle-monthly");
            priceBilling = "monthly";
            break;
    }
};

export {
    priceBilling,
    switchToggle,
    toggle
}