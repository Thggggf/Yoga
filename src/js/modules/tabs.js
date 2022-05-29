function tabsModule() {
    const containers = document.querySelectorAll(".container"),
        
        tabs = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

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
}

export {tabsModule}