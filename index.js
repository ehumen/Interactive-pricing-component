const sliderEl = document.getElementById("slider");
const pagesView = document.getElementById("pageview");
const costPerMonth = document.getElementById("cost");
const discountSwitcher = document.querySelector("input[type=checkbox]");

let priceArr = [8, 12, 16, 24, 36];

discountSwitcher.addEventListener("change", () => {
    if (discountSwitcher.checked) {
        priceArr = [6, 9, 12, 18, 27];
        costPerMonth.textContent *= 0.75;
    } else {
        priceArr = [8, 12, 16, 24, 36]
        costPerMonth.textContent /= 0.75;
    }
})
sliderEl.addEventListener("input", (e) => {
    let tempSliderValue = e.target.value;
    //decorating slider bar
    sliderEl.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${tempSliderValue}%, hsl(224, 65%, 95%) ${tempSliderValue}%)`;
    //choose price value
    switch (tempSliderValue) {
        case "0":
            pagesView.textContent = "10K";
            costPerMonth.textContent = priceArr[0];
            break;
        case "25":
            pagesView.textContent = "50K";
            costPerMonth.textContent = priceArr[1]
            break;
        case "50":
            pagesView.textContent = "100K";
            costPerMonth.textContent = priceArr[2];
            break;
        case "75":
            pagesView.textContent = "500K";
            costPerMonth.textContent = priceArr[3];
            break;
        case "100":
            pagesView.textContent = "1M";
            costPerMonth.textContent = priceArr[4];
            break;

    }
})


