
const gridContainer = document.querySelector(".container");
const box = document.createElement("div");
const resetBtn = document.querySelector(".reset");
const input = document.getElementById("grid-Size");
const submitBtn = document.getElementById("submit");
const gridSize = 960;


submitBtn.addEventListener("click", () => {
    if (input.value > 100 || input.value < 1){
        return alert("Please enter a value between 1 and 100!");
    }else {
        const size = Number(input.value);
        createGrid(size);
    }

})


function createGrid(size) {

    gridContainer.innerHTML = "";
    const total = size * size;
    const cellSize = 960 / size;

    for (let i = 0; i < total; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${cellSize}px`;
        box.style.height = `${cellSize}px`;
        gridContainer.appendChild(box);
    }
    
}
        
gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box")) {
        e.target.classList.add("hoverOver") 
    }
})



resetBtn.addEventListener("click", resetPage)

function resetPage() {
    const boxes = document.querySelectorAll(".box");
    

    boxes.forEach(box => {
        box.classList.remove("hoverOver");
    });
}




createGrid(16);