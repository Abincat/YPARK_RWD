function doFirst() {

    let buttonContainer = document.getElementById("button_container");
    let hamburgerTop = document.getElementById("hamburgerTop");
    let hamburgerMiddle = document.getElementById("hamburgerMiddle");
    let hamburgerBottom = document.getElementById("hamburgerBottom");

    let isHamburgerOn = false;

    function updateHamburgerState() {
        isHamburgerOn = !isHamburgerOn;
        hamburgerTop.classList.toggle("-on", isHamburgerOn);
        hamburgerMiddle.classList.toggle("-on", isHamburgerOn);
        hamburgerBottom.classList.toggle("-on", isHamburgerOn);
    }


    buttonContainer.addEventListener("click", function (event) {

        let rect = buttonContainer.getBoundingClientRect();
        if (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        ) {

            updateHamburgerState();
        }
    });
}

window.addEventListener('load', doFirst);