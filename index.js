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
        case "start-drawing":
            localStorage.setItem("drawing", "true");
            break;
        case "stop-drawing":
            localStorage.setItem("drawing", "false");
            break;
        case "reset":
            localStorage.setItem("drawing", "reset");
            break;
    }
});
