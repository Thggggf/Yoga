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

})

