let handleClick = () => {
    let elements = document.querySelectorAll(".button")
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            console.log(elements[i].textContent)
        });
    }
}