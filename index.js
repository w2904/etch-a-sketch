const gridForm = document.querySelector("#grid-form");

gridForm.addEventListener("submit", (event) => {
    const sizeInputDiv = document.querySelector("#grid-input");
    const sizeNumber = Number(sizeInputDiv.value);
    if (Number.isInteger(sizeNumber) && sizeNumber >= 2 && sizeNumber <= 100) {
        localStorage.setItem("size of grid", sizeNumber);
    }
    else {
        alert("Incorrect input");
        event.preventDefault();
        return false;
    }
});

const gridSize = Number(localStorage.getItem("size of grid")) || 16;

function createGrid(size) {
    const gridParent = document.querySelector("#drawing-area");
    for (let i = 0; i < size; i++) {
        const gridLine = document.createElement("div");
        gridLine.classList.add("grid-line");
        for (let j = 0; j < size; j++) {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid");
            gridLine.appendChild(gridDiv);
        }
        gridParent.appendChild(gridLine);
    }
}

createGrid(gridSize);

const drawingInputs = document.querySelector("#drawing-inputs");

drawingInputs.addEventListener("click", (event) => {
    const target = event.target;
    switch(target.id) {
        case "blue-button":
            localStorage.setItem("drawing", "blue");
            location.reload();
            break;
        case "random-button":
            localStorage.setItem("drawing", "random");
            location.reload();
            break;
        case "reset-button":
            localStorage.setItem("drawing", "reset");
            location.reload();
            break;
    }
});

if (localStorage.getItem("drawing") === "blue" || localStorage.getItem("drawing") === "random") {
    const grid = document.querySelectorAll(".grid");
    grid.forEach(square => square.addEventListener("mouseenter", () => {
        square.classList.replace("grid", "grid-colored");
        if (localStorage.getItem("drawing") === "random") {
            square.style.backgroundColor = getRandomColor();
        }
    }));
}

function getRandomColor() {
    const symbols = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}