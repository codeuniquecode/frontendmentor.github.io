let box = document.querySelectorAll(".box");

box.forEach(element => {
    let icon = element.querySelector('.icon');
    let answer = element.querySelector('.answer');
    answer.style.display = "none"; // Initialize answer style inside the loop

    element.addEventListener("click", () => {
        if (answer.style.display !== "none") {
            answer.style.display = "none";
            icon.src = "icon-plus.svg";
        } else {
            answer.style.display = "inline";
            icon.src = "icon-minus.svg";
        }
    });
});
