window.addEventListener("DOMContentLoaded", function () {
    'use strict'
    let tabs = document.querySelectorAll(".info-header-tab")
    let info = document.querySelector(".info-header")
    let tabContent = document.querySelectorAll(".info-tabcontent")

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show")
            tabContent[i].classList.add("hide")
        }
    }
    hideTabContent(1);
    function showTabContent(a) {
        if (tabContent[a].classList.contains("hide")) {
            tabContent[a].classList.remove("hide")
            tabContent[a].classList.add("show")

        }
    }

    info.addEventListener("click", (evt) => {
        let target = evt.target

        if (target && target.classList.contains("info-header-tab")) {
            tabs.forEach((el, index) => {
                if (el === target) { hideTabContent(0); showTabContent(index) }
            })
        }
    })

    // Timer
    const deadline = new Date();

    // add a day
    deadline.setDate(deadline.getDate() + 1);

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date())
        let seconds = Math.floor((t / 1000) % 60)
        let minutes = Math.floor((t / 1000 / 60) % 60)
        let hours = Math.floor((t / (1000 * 60 * 60)))
        if (t < 0) {
            seconds = minutes = hours = 0
        }

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }
    }

    function setClock(id, endtime) {
        const timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime)
            hours.textContent = t.hours.toString().length === 1 ? "0" + t.hours
                :
                t.hours
            minutes.textContent = t.minutes.toString().length === 1 ? "0" + t.minutes
                :
                t.minutes
            seconds.textContent = t.seconds.toString().length === 1 ? "0" + t.seconds
                :
                t.seconds

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock("timer", deadline);


    // Modal
    const openModalBtn = document.querySelector(".more")
    const modal = document.querySelector(".overlay")
    const closeModalBtn = document.querySelector(".popup-close")
    function openModal() {
        modal.style.display = "block";
        openModalBtn.classList.add("more-splash")
        document.body.style.overflow = "hidden"
        closeModalBtn.addEventListener("click", closeModal)
    }

    function closeModal() {
        modal.style.display = "none";
        openModalBtn.classList.remove("more-splash")
        document.body.style.overflow = ""
        closeModalBtn.removeEventListener("click", closeModal)

    }
    openModalBtn.addEventListener("click", openModal)

    // modal for Tabs
    const tabsFrame = document.querySelector(".info")
    tabsFrame.addEventListener("click", function (evt) {
        if (evt.target && evt.target.className === "description-btn") {
            openModal()
        }
    })

    // Requests
    const contactForm = document.querySelector(".main-form")
    const contactFormPhone = contactForm.querySelector(".popup-form__input")
    const mainForm = document.querySelector("#form")
    const mainFormMail = mainForm.querySelector("input[type='email']")
    const mainFormPhone = mainForm.querySelector("input[type='tel']")
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault()


        const data = {
            phone: contactFormPhone.value
        }
        contactFormPhone.value = ""
        closeModal()
        const request = new XMLHttpRequest();
        request.open('POST', "server.php", true);

        request.setRequestHeader('Content-type', 'application/json');

        request.onreadystatechange = function () {//Call a function when the state changes.
            if (request.readyState == 4 && request.status == 200) {
                alert(request.responseText);
            }
        }
        request.send(JSON.stringify(data));
    })
    mainForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const data = {
            mail: mainFormMail.value,
            phone: mainFormPhone.value
        }
        mainFormMail.value = ""
        mainFormPhone.value = ""
        const request = new XMLHttpRequest();

        request.open('POST', "server.php", true);

        request.setRequestHeader("POST", "server.php", true);

        request.onreadystatechange = function () {//Call a function when the state changes.
            if (request.readyState == 4 && request.status == 200) {
                alert(request.responseText);
            }
        }

        request.send(JSON.stringify(data));

    })

    // Slider
    let slideIndex = 1;
    const slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    setVisibleSlide(slideIndex)


    function setVisibleSlide(slide) {

        if (slide > slides.length) {
            slideIndex = 1;
        }
        if (slide < 1) {
            slideIndex = slides.length
        }
        slides.forEach((item) => {

            item.style.display = "none";
        })
        dots.forEach((item) => {
            item.classList.remove("dot-active")
        })
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active")
    }
    function plusSlides(n) {
        setVisibleSlide(slideIndex += n)
    }
    function currentSlide(n) {
        setVisibleSlide(slideIndex = n)
    }
    prev.addEventListener("click", () => {
        plusSlides(-1)
    });
    next.addEventListener("click", () => {
        plusSlides(1)
    });
    dotsWrap.addEventListener("click", (evt) => {
        for (let i = 0; i < dots.length; i++) {
            if (evt.target.classList.contains("dot") && evt.target === dots[i]) {
                currentSlide(i + 1)
            }
        }

    })

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










})

