import { tabsModule } from "./modules/tabs.js"
import { timerModule } from "./modules/timer.js"
import { modalModule } from "./modules/modal.js"
import { requestsModule } from "./modules/requests.js"
import { sliderModule } from "./modules/slider.js"
import { calculatorModule } from "./modules/calculator"

window.addEventListener("DOMContentLoaded", function () {

    tabsModule();
    timerModule();
    modalModule();
    requestsModule();
    sliderModule();
    calculatorModule();
})

