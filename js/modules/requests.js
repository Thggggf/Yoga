function requestsModule () {
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
}

export { requestsModule }