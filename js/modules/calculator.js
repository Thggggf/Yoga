function calculatorModule() {
    // Calculator

    const persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total");

    let personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;
    persons.addEventListener("change", function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000
        if (restDays.values === "") {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    })
    persons.addEventListener("change", function () {
        personsSum = +this.value;
        if (!personsSum) {
            totalValue.textContent = 0;
            return;
        }
        total = (daysSum + personsSum) * 4000
        if (restDays.value === "") {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    })
    restDays.addEventListener("change", function () {
        daysSum = +this.value;
        if (!daysSum) {
            totalValue.textContent = 0;
            return;
        }
        total = (daysSum + personsSum) * 4000
        if (persons.value === "") {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    })

    place.addEventListener("change", function () {
        if (restDays.value === "" || persons.value === "") {
            totalValue.textContent = 0;
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value
        }
    })

}

export { calculatorModule }