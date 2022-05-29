function modalModule() {
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

        (async function () {
            await new Promise((go) => {
                modal.animate([
                    // keyframes
                    { opacity: '0%' },
                ], {
                    // timing options
                    duration: MODAL_CLOSE_DURATION,
                })
                setTimeout(go, MODAL_CLOSE_DURATION)
            });
            modal.style.display = "none"
        })()



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
}

export { modalModule }